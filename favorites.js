// classe que vai conter a lógica dos dados
// como os dados serão estruturados
export class Favorites {
  constructor(root) {
  this.root = document.querySelector(root) 
  this.load()
  }

  load() {
    this.entries = [
      {
        login:'lauuh89',
        name: "Laureana Vanessa",
        public_repos: '76',
        followers: '9589'
      },
      {
        login:'fabio-beutler',
        name: "Fabio Beutler",
        public_repos: '48',
        followers: '22503'
      }
    ]
  }
}

// classe que vai criar a visualização e eventos HTML
// Extends faz a junção de uma class com outra
// super(root) faz a cola entre as classes
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
  }

  update() {
   this.removeAllTr()

   this.entries.forEach( user => {
    const row = this.creatRow()
    
    row.querySelector('.user img').src = `https://github.com/${user.login}.png`
    row.querySelector('.user img').alt = `Imagem de ${user.name}`
    row.querySelector('.user p').textContent = user.name
    row.querySelector('.user span').textContent = user.login
    row.querySelector('.repositories').textContent = user.public_repos
    row.querySelector('.followers').textContent = user.followers

    this.tbody.append(row)
   })
  }

  creatRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `<tr>
    <td class="user">
      <img src="https://github.com/lauuh89.png" alt="Imagem de lauuh89">
      <a href="https://github.com/lauuh89" target="_blank">
        <p>Laureana Vanessa</p>
        <span>lauuh89</span>
      </a>
    </td>
    <td class="repositories">
      76
    </td>
    <td class="followers">
      9589
    </td>
    <td>
      <button class="remove">&times;</button>
    </td>
  </tr>`

  return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr')
    .forEach((tr) => {
      tr.remove()
    })
  }
}