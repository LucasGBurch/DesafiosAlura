const inputPerfil = document.querySelector('#imagem__perfil');

const formImagem = document.querySelector('.principal__formulario--imagem');

const menuPerfil = document.querySelector('.cabecalho__menu--perfil')

const img = document.createElement('img');
img.src = '../../assets/img/fotoperfil.png';
img.classList.add('imagem-perfil');

formImagem.appendChild(img);

inputPerfil.addEventListener('change', (evento) => {
  const inputTarget = evento.target;
  
  // Alvo do evento "mudança", no caso o upload no input de Perfil!!!
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();
    // Leitor de arquivo

    reader.addEventListener('load', (evento) => {
      const readerTarget = evento.target;

      img.src = readerTarget.result;
      menuPerfil.src = img.src;
    });

    // Forma como os dados do arquivo devem ser lidos
    reader.readAsDataURL(file);
  }
});

