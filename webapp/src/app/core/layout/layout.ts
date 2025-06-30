import { Component } from '@angular/core';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'frinay-layout',
  imports: [Footer, Header, Sidebar, RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
