import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('AuthGuard')
    
    return this.verificarAcesso();
  }

  private verificarAcesso() {
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }

  /***
   * Foi feito o teste de logar na aplicação com usuario autorizado, após atualizar a pagina e 
   * ser redirecionado para login de novo, os modulos foram carregados na aba de rede no debbuger do
   * navegador. O canLoad resolve isso
   */

  canLoad(
    route: Route
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canLoad: verificando se usuario pode carregar o codigo do modulo')
    return this.verificarAcesso();
  }
}
