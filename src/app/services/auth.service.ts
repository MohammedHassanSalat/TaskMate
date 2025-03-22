import { Injectable } from '@angular/core';
import { Auth, confirmPasswordReset, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, user, User } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new BehaviorSubject<User | null>(null);

  constructor(private Auth: Auth) {
    user(Auth).subscribe((currentUser) => this.user$.next(currentUser));
  }

  getUser(): Observable<User | null> {
    return this.user$.asObservable();
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.Auth, email, password);
  }

  singnIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.Auth, email, password);
  }

  signOut() {
    return signOut(this.Auth);
  }

  resetPassword(email: string) {
    return sendPasswordResetEmail(this.Auth, email);
  }
}
