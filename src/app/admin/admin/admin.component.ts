import { Component, OnInit, OnDestroy } from '@angular/core'
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AngularFireAuth } from '@angular/fire/auth'
import { MatSnackBar, MatSnackBarRef } from '@angular/material'
import { FirebaseAuthCodes } from '@app/enums/firebase-auth-codes'
import { bounceInLeft } from 'ng-animate'
import { bounceInDown } from 'ng-animate'
import { fadeIn } from 'ng-animate'
import { trigger, transition, useAnimation } from '@angular/animations'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))]),
    trigger('bounceInLeft', [transition('* => *', useAnimation(bounceInLeft))]),
    trigger('bounceInDown', [transition('* => *', useAnimation(bounceInDown))]),
  ],
})
export class AdminComponent implements OnInit, OnDestroy {
  fadeIn: any
  bounceInLeft: any
  bounceInDown: any
  adminForm: FormGroup
  userCredential: firebase.auth.UserCredential
  user: firebase.User
  snackbarRef: MatSnackBarRef<any>
  constructor(
    public db: AngularFireDatabase,
    public firebase: AngularFireAuth,
    public snackBar: MatSnackBar
  ) {
    this.adminForm = new FormGroup({
      nickname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    })
  }

  ngOnInit() {}

  get form() {
    return this.adminForm.controls
  }

  ngOnDestroy() {
    this.snackbarRef.dismiss()
  }

  onSubmit() {
    const nickname = this.adminForm.value.nickname
    const password = this.adminForm.value.password

    this.firebase.auth
      .signInWithEmailAndPassword(nickname, password)
      .then(userCredeential => {
        this.userCredential = userCredeential
        this.user = userCredeential.user
        this.snackbarRef = this.snackBar.open('Вы вошли как ' + this.user.email)
      })
      .catch(error => {
        let text
        switch (error.code) {
          case 'auth/invalid-email':
            text = FirebaseAuthCodes.INVALID_EMAIL
            break
          case 'auth/user-not-found':
            text = FirebaseAuthCodes.USER_NOT_FOUND
            break
          case 'auth/wrong-password':
            text = FirebaseAuthCodes.WRONG_PASSWORD
            break
        }

        this.snackBar.open(text, 'Закрыть')
      })
  }
}
