import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Firestore, addDoc, collection, serverTimestamp } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import { doc, getDoc, setDoc } from '@angular/fire/firestore';
@Component({
  selector: 'app-artigo-postar',
  standalone: true, // Add this for standalone components
  imports: [FormsModule, CommonModule, EditorModule],
  templateUrl: './artigo-postar.component.html',
  styleUrls: ['./artigo-postar.component.css'] // Fixed property name (styleUrl → styleUrls)
})
export class ArtigoPostarComponent {

//editor


  editorContent = '';
  editorConfig = {
    height: 400,
    menubar: true,
    plugins: [
      'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
  'searchreplace', 'wordcount', 'visualblocks', 'visualchars', 'code', 'fullscreen', 'insertdatetime',
  'media', 'table', 'emoticons', 'help'
    ],
    toolbar:
      'undo redo | formatselect | bold italic backcolor | ' +
      'alignleft aligncenter alignright alignjustify | ' +
      'bullist numlist outdent indent | removeformat | help'
  };

  constructor(private firestore: Firestore) {
    this.loadContent();
  }

async save() {
  const collectionRef = collection(this.firestore, 'posts');
  await addDoc(collectionRef, {
    content: this.editorContent,
    updatedAt: new Date()
  });
}

  async loadContent() {
    const ref = doc(this.firestore, 'posts/sample-post');
    const snapshot = await getDoc(ref);
    if (snapshot.exists()) {
      this.editorContent = snapshot.data()['content'] || '';
    }
  }

  //fim do editor




  private router = inject(Router);

  // Form model
  newPost = {
    title: '',
    content: '',
    imageUrl: ''
  };

  isSubmitting = false;
  errorMessage = '';

  async onSubmit() {
    // Reset previous errors
    this.errorMessage = '';
    
    // Validate required fields
    if (!this.newPost.title.trim()) {
      this.errorMessage = 'Title is required';
      return;
    }
    
    if (!this.newPost.content.trim()) {
      this.errorMessage = 'Content is required';
      return;
    }

    this.isSubmitting = true;

    try {
      const postsCollection = collection(this.firestore, 'posts');
      await addDoc(postsCollection, {
        title: this.newPost.title,
        content: this.newPost.content,
        imageUrl: this.newPost.imageUrl || null,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });

      // Reset form and redirect
      this.newPost = { title: '', content: '', imageUrl: '' };
      this.router.navigate(['/']);
      
    } catch (error) {
      console.error('Error submitting post:', error);
      this.errorMessage = this.getFirestoreError(error);
    } finally {
      this.isSubmitting = false;
    }
  }

  private getFirestoreError(error: any): string {
    if (error.code === 'permission-denied') {
      return 'You do not have permission to create posts';
    }
    return 'Failed to submit post. Please try again.';
  }
}