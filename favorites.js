// classe que vai conter a lógica dos dados
// como os dados serão estruturados
export class Favorites {
  constructor(root) {
  this.root = document.querySelector(root) 
  }
}

// classe que vai criar a visualização e eventos HTML
// Extends faz a junção de uma class com outra
// super(root) faz a cola entre as classes
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
  }
}