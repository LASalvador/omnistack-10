import React from 'react';
import './global.css'
import './app.css'
import './sidebar.css'
import './main.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário GitHub</label>
            <input type="text" name="github_username" id="github_username" required></input>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input type="text" name="techs" id="techs"></input>
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" name="latitude" id="latitude"></input>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude </label>
              <input type="text" name="longitude" id="longitude"></input>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img alt="FOto de perfil" src="https://avatars0.githubusercontent.com/u/37023076?s=460&v=4"></img>
              <div className="user-info">
                <strong>Lucas Salvador</strong>
                <span>Vue.js, Node.js</span>
              </div>
            </header>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
              Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.
            </p>
            <a href="https://github.com/LASalvador">Acesse o perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img alt="FOto de perfil" src="https://avatars0.githubusercontent.com/u/37023076?s=460&v=4"></img>
              <div className="user-info">
                <strong>Lucas Salvador</strong>
                <span>Vue.js, Node.js</span>
              </div>
            </header>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
              Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.
            </p>
            <a href="https://github.com/LASalvador">Acesse o perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img alt="FOto de perfil" src="https://avatars0.githubusercontent.com/u/37023076?s=460&v=4"></img>
              <div className="user-info">
                <strong>Lucas Salvador</strong>
                <span>Vue.js, Node.js</span>
              </div>
            </header>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
              Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.
            </p>
            <a href="https://github.com/LASalvador">Acesse o perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img alt="FOto de perfil" src="https://avatars0.githubusercontent.com/u/37023076?s=460&v=4"></img>
              <div className="user-info">
                <strong>Lucas Salvador</strong>
                <span>Vue.js, Node.js</span>
              </div>
            </header>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
              Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.
            </p>
            <a href="https://github.com/LASalvador">Acesse o perfil no github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
