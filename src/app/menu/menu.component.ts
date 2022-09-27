import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { toggleDarkTheme } from 'src/darkTheme';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  sobrenome = environment.sobrenome
  foto = environment.foto
  id = environment.id

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  sair(){
    this.router.navigate(['/inicio'])
    environment.token = ''
    environment.nome = ''
    environment.sobrenome = ''
    environment.foto = ''
    environment.id = 0
    environment.darktheme = false
    if(document.body.classList.contains('dark-theme')){
      toggleDarkTheme()
    }
  }

  darkTheme(){
    environment.darktheme = !environment.darktheme
    toggleDarkTheme()
  }

}

