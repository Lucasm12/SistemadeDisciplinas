const disciplinas = {
  disciplina1: {
    "Aula 01(11-08-2023)": "https://drive.google.com/file/d/1tYVpEAL7vWMdLngFfWnKn5fwkCLaPT2x/view?usp=drive_link",
    "Aula 02(18-08-2023)": "https://drive.google.com/file/d/1RVwWlrZc-kUCwsZjNOZQnM8H1du6iFN3/view?usp=drive_link",
     "Aula 03(25-08-2023)": "https://drive.google.com/file/d/1lfud76Y7NrwYST1lFywZ1fHaLaeXeFLt/view?usp=drive_link",
     "Primeira Avaliação(01-09-2023)": "https://drive.google.com/file/d/1jSbV8qwiDJGooBxTLvIlU_NAcelSDUTC/view?usp=drive_link",
      "Aula 04(08-09-2023)": "https://drive.google.com/file/d/1mNcVefwpG75w2cyVq4TK82s-Rob85t7W/view?usp=drive_link",
      "Aula 05(15-09-2023)": "https://drive.google.com/file/d/19hueILm04HMjRnEvzwe1ud80yHJV8JaY/view?usp=drive_link",
     "Aula 06(29-09-2023)": "https://drive.google.com/file/d/1BTI-IxfZgleJCfu3BuSX217N9kRIssLc/view?usp=drive_link",
     "Segunda Avaliação (27-10-2023)": "https://drive.google.com/file/d/1pRB_RonkvR6oIijVL2_MVpgWwVhCPln4/view?usp=drive_link",
     "Aula 07(03-11-2023)": "https://drive.google.com/file/d/1tXdyXlGjMjGsuWRyYxawVD-jKTjcX8cw/view?usp=drive_link",
     
    
   
  },
  disciplina2: {
    "Aula 01(10-08-2023)": "https://drive.google.com/file/d/1VhYT-eb48XpdnEC5nmTN643h_LYhWj8O/view?usp=drive_link",
    "Aula 02(17-08-2023)": "https://drive.google.com/file/d/1A44ktOGyzFodGs6ONdBWkBCH-i5apHYm/view?usp=drive_link",
    "Aula 03(24-08-2023)": "https://drive.google.com/file/d/13HGtXEFwYTA8Om5XK05ztBgqVIYuYdZR/view?usp=drive_link",
    "Primeira Avaliação(31-08-2023)": "https://drive.google.com/file/d/1gQD0HYfCMeEtdUxLLy5eUPPsrAWkFCWY/view?usp=drive_link",
     "Aula 04(14-09-2023)": "https://drive.google.com/file/d/1HSy-93Bp2mcNsMrUBxy9tEFMaHqhbE22/view?usp=drive_link",
     "Aula 05(21-09-2023)": "https://drive.google.com/file/d/1-pS12HEKE1q4BBMMUTZsq3aHC2JL68N3/view?usp=drive_link",
      "Aula 06(28-09-2023)": "https://drive.google.com/file/d/1a_ZY3oXeaoBHzb2kmLL82Qw_C8COhe6K/view?usp=drive_link",
    "Aula 07(12-10-2023)": "https://drive.google.com/file/d/1waY5cVsUWqq1I_y-wDqqB6OM33loxnln/view?usp=drive_link",
     "Segunda Avaliação (26-10-2023)": "https://drive.google.com/file/d/1asiYty4lNx-FPHAus_idUN-ANPuSlkOR/view?usp=drive_link",
   
    
   
  },
   disciplina3: {
   
  },

  disciplina4: {
    "Aula 01(26-02-2024)":"https://drive.google.com/file/d/1EdE4BV3dcJCv84OGvQ79ZFQdYBVBPHoI/view?usp=drive_link",
    "Aula 01(26-02-2024) Divisão do Time":"https://docs.google.com/spreadsheets/d/1xD_jcVov_JMbo-sFJBb5RLJJ0QEMXzSnEijB6y_pXtE/edit?usp=sharing",

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


