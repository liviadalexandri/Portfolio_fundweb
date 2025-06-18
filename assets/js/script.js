const sobre = document.querySelector('#about')

const formulario = document.querySelector("#formulario")

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

async function getApiGithub() {
	try {
		// Enviar uma Requisição HTTP para a API do Github
		const dadosPerfil = await fetch(
			`https://api.github.com/users/liviadalexandri`
		)

		// Converte a Resposta HTTP para o formato JSON
		const perfil = await dadosPerfil.json()

		// Criando o conteúdo da Seção about
		let conteudo =`
    
            <!-- Imagem da seção Sobre -->
            <img src="${perfil.avatar_url}" alt="Foto do perfil do Github - ${perfil.name}" />

            <!-- Texto da seção Sobre -->
            <article id="about_texto">
                <h2>Quem é Lívia por trás do código?</h2>
                <p>Sou Lívia D'Alexandri, uma desenvolvedora movida pela curiosidade e pela vontade de entender o que acontece por trás de cada tecnologia. A minha trajetória é marcada pela junção entre criatividade e lógica: sou estudante de Análise e Desenvolvimento de Sistemas, com formação em Design Gráfico, o que me proporciona uma visão integrada e estratégica na hora de resolver problemas e criar soluções.</p> 
                <p>Estou em constante transição e evolução, com um perfil proativo, curioso e comprometido com o aprendizado contínuo. Mais do que seguir tendências, a minha maior habilidade é aprender rápido, com profundidade e intenção. Cada projeto, cada erro e cada conquista fazem parte do meu processo de crescimento.</p>

                <div id="about_github" class="flex sobre_github">
                    <a href="${perfil.html_url}" target="_blank" class="botao">Github</a>
                    <p>${perfil.followers} seguidores</p>
                    <p>${perfil.public_repos} repositórios</p>
                </div>
            </article>
            
    `
		// Adicionar o conteúdo na página index.html, na Seção about
		sobre.innerHTML += conteudo

	} catch (error) {
		console.error(error)
	}
}

formulario.addEventListener("submit", function(event){

    event.preventDefault()

    const campoNome = document.querySelector("#nome")
    const txtNome = document.querySelector("#txtNome")

    if(campoNome.value.length < 3){
        txtNome.innerHTML = "O Nome deve ter no mínimo 3 caracteres"
        campoNome.focus()
        return
    }else{
        txtNome.innerHTML = ""
    }

     const campoEmail = document.querySelector("#email")
    const txtEmail = document.querySelector("#txtEmail")

    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = "Digite um e-mail válido"
        campoEmail.focus()
        return
    }else{
        txtEmail.innerHTML = ""
    }

    const campoAssunto = document.querySelector("#assunto")
    const txtAssunto = document.querySelector("#txtAssunto")

    if(campoAssunto.value.length < 5){
        txtAssunto.innerHTML = "O Assunto deve ter no mínimo 5 caracteres"
        campoAssunto.focus()
        return
    }else{
        txtAssunto.innerHTML = ""
    }

    // Enviar o e-mail
    formulario.submit()
})

getApiGithub()