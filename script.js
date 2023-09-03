const disciplinas = {
  disciplina1: {
    "Aula 01(11-08-2023)": "https://drive.google.com/file/d/1tYVpEAL7vWMdLngFfWnKn5fwkCLaPT2x/view?usp=drive_link",
    "Aula 02(18-08-2023)": "https://drive.google.com/file/d/1RVwWlrZc-kUCwsZjNOZQnM8H1du6iFN3/view?usp=drive_link",
     "Aula 03(25-08-2023)": "https://drive.google.com/file/d/1lfud76Y7NrwYST1lFywZ1fHaLaeXeFLt/view?usp=drive_link",
     "Primeira Avaliação(01-09-2023)": "https://drive.google.com/file/d/1jSbV8qwiDJGooBxTLvIlU_NAcelSDUTC/view?usp=drive_link",
   
  },
  disciplina2: {
    "Aula 01(10-08-2023)": "https://drive.google.com/file/d/1VhYT-eb48XpdnEC5nmTN643h_LYhWj8O/view?usp=drive_link",
    "Aula 02(17-08-2023)": "https://drive.google.com/file/d/1A44ktOGyzFodGs6ONdBWkBCH-i5apHYm/view?usp=drive_link",
    "Aula 03(24-08-2023)": "https://drive.google.com/file/d/13HGtXEFwYTA8Om5XK05ztBgqVIYuYdZR/view?usp=drive_link",
    "Primeira Avaliação(31-08-2023)": "https://drive.google.com/file/d/1gQD0HYfCMeEtdUxLLy5eUPPsrAWkFCWY/view?usp=drive_link",
    
   
  },
};

function exibirConteudos(disciplina) {
  document.getElementById("mensagem-inicial").style.display = "none"; // Esconde a mensagem inicial
  document.getElementById("conteudos").style.display = "block"; // Exibe a seção de conteúdos
  const listaConteudos = document.getElementById("lista-conteudos");
  listaConteudos.innerHTML = ""; // Limpa a lista de conteúdos antes de adicionar os novos

  // Verifica se a disciplina existe no objeto 'disciplinas'
  if (disciplina in disciplinas) {
    const aulas = disciplinas[disciplina];
    Object.keys(aulas).forEach((aula) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = aulas[aula];
      link.textContent = aula;
      li.appendChild(link);
      listaConteudos.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "Nenhum conteúdo disponível para esta disciplina.";
    listaConteudos.appendChild(li);
  }
}

function voltarParaDisciplinas() {
  document.getElementById("mensagem-inicial").style.display = "block"; // Exibe a mensagem inicial
  document.getElementById("conteudos").style.display = "none"; // Esconde a seção de conteúdos
}


