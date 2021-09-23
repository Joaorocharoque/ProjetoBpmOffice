function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
function criaLinha(usuario){
  document.createElement("tr");
  tdId = document.createElement("td");
  tdNome = document.createElement("td");
  tdId.innerHTML = usuario.id
  tdNome.innerHTML = usuario.nome

  linha.appendChild(tdId);
  linha.appendChild(tdNome);

  return linha;
}

function main(){
  let data = fazGet("https://api.github.com/users/octocat")
  let usuarios = JSON.parse(data);
  let tabela = document.getElementById("tabela")
  usuarios.array.forEach(element => {
      let linha = criaLinha(element);
      tabela.appendChild(linha);
  });

}
main()