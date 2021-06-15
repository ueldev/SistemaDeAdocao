/* ((((((coisas ja feitas))))) */

//cadastrar usuario estra pronto
//cadastrar animal esta pronto
//listar usuario esta pronto
//listar animal esta pronto
//buscar usuario esta pronto
//buscar animal esta pronto
//buscar usuario por cpf esta pronto
//buscar animal por chip esta pronto
//adotar um animal esta pronto
//editar usuario e animal esta pronto

/* ((((((coisas ja feitas)))))) */


/* --------- coisas que faltam fazer ---------- */
//se o animal estiver disponivel ou vivo, alert("este animal não pode ser removido!")
//usuario so pode ser removido se tiver com um animal adotado morto
//adicionar function para remover cadastro de animal e de usuarios.
//adicionar function para listar animais disponiveis
//comentar o código inteiro.
/* --------- coisas que faltam fazer ---------- */

var listaUsuarios = [];
var listaAnimais = [];

function cadastrarUsuario(){

    var usuario = {

        cpf: null,
        sexo: null,
        nome: null,
        idade: null,
        estado: null,
        cidade: null,
        bairro: null,
        rua: null,
        donoDe: null,
    };
    //criar "donoDe" começa como null, mas quando o usuário adotar algum animal, ele receberá o nome do animal.
        
    usuario.cpf = ler ("CPF - Para facilitar sua digitação e o funcionamento de nosso sistema, pedimos para que você não use carácteres especiais como esses: \n (- . / _ ...) \n e lembre-se, o CPF é composto por 11 números! :)")    
    verificarCpf();
    function verificarCpf(){
        var flag = false // Esta flag serve para permitir ou não o cadastro do cpf
        for (let i = 0; i < listaUsuarios.length; i++) {
            if(usuario.cpf == listaUsuarios[i].cpf){
                alert("este cpf ja existe")
                cadastrarUsuario();
            }if(usuario.cpf !== listaUsuarios[i].cpf){
                flag = true
            }                     
        }
    }
    usuario.sexo = ler ("Informe o Sexo").toLocaleLowerCase();
    usuario.nome = ler("Informe o Nome").toLocaleLowerCase();
    usuario.idade = ler("Informe a Idade");
    usuario.estado = ler("Informe o estado que o usuário mora").toLocaleLowerCase();
    usuario.cidade = ler("Informe a cidade que o usuário mora").toLocaleLowerCase();
    usuario.bairro = ler("Informe o bairro que o usuário mora").toLocaleLowerCase();
    usuario.rua = ler("Informe a rua que o usuário mora").toLocaleLowerCase();
    
    listaUsuarios.push(usuario)
    console.log(listaUsuarios)

    home();
}

function cadastrarAnimal(){

    var animal = {

        chip: null,
        nome: null,
        especie: null,
        raca: null,
        sexo: null,
        idade: null,
        peso: null,
        situacao: null,
        referencia: null,
    };

    animal.chip = ler ("Informe o chip do animal.");
    verificarChip();
    function verificarChip(){
        var flag = false // Esta flag serve para permitir ou não o cadastro do chip 
        for (i = 0; i < listaAnimais.length; i++){
            if (animal.chip == listaAnimais[i].chip){
                alert("Este chip ja consta em nossos dados. Por favor, reveja o chip e tente novamente!")         
            }
            if (animal.chip !== listaAnimais[i].chip){
                flag = true
            }
        }    
    }

    animal.nome = ler ("Informe o nome do pet").toLocaleLowerCase();
    animal.especie = ler ("Informe a especie do pet").toLocaleLowerCase();
    animal.raca = ler ("Informe a raça do pet").toLocaleLowerCase();
    animal.sexo = ler ("Informe o sexo do pet").toLocaleLowerCase();
    animal.idade = ler ("Informe a idade do pet").toLocaleLowerCase();
    animal.peso = ler ("Informe o peso do pet").toLocaleLowerCase();
    animal.situacao = ler ("Se seu pet estiver vivo, digite '1'. Se o pet estiver morto, digite '2'.")
    
    switch (animal.situacao) {
        case "1":
            animal.situacao = "vivo";
            break;
        case "2":
            alert("Não podemos cadastrar animais mortos!")
            return home();
            break;
        default:
            break;
    }
    
    animal.referencia = ler("Digite '1' para confirmar que você tem ciência de que o animal será cadastrado e que estará disponível para encontrar uma nova família.")

    switch (animal.referencia) {
        case "1":
            animal.referencia = "disponivel";
            alert("Animal cadastrado com sucesso");
            break;
        case "2":
            alert("Ok. Nos vemos em breve!")
            return home();
            break;
        default:
            break;
    }

    listaAnimais.push(animal)
    console.log(listaAnimais)

    home();
}   

function listarUsuarios(){
    for (var i = 0; i < listaUsuarios.length; i++) {
        console.log("----- " + listaUsuarios[i].nome + " -----");
        console.log("CPF: " + listaUsuarios[i].cpf);
        console.log("Sexo: " + listaUsuarios[i].sexo);
        console.log("Nome: " + listaUsuarios[i].nome);
        console.log("Idade: " + listaUsuarios[i].idade);
        console.log("Estado: " + listaUsuarios[i].estado);
        console.log("Cidade: " + listaUsuarios[i].cidade);
        console.log("Bairro: " + listaUsuarios[i].bairro);
        console.log("Rua: " + listaUsuarios[i].rua);
        console.log("Dono de: " + listaUsuarios[i].donoDe);
    }
    home();
}

function listarAnimais(){

    if(listaAnimais.length == 0){
        alert("Esta lista esta vazia")
    }else{
        for(var j = 0; j < listaAnimais.length; j++){
            console.log("----- " + listaAnimais[j].nome + " -----");
            console.log("Chip: " + listaAnimais[j].chip);
            console.log("Nome: " + listaAnimais[j].nome);
            console.log("Espécie: " + listaAnimais[j].especie);
            console.log("Raça: " + listaAnimais[j].raca);
            console.log("Sexo: " + listaAnimais[j].sexo);
            console.log("Peso: " + listaAnimais[j].peso);
            console.log("Situação: " + listaAnimais[j].situacao);
            console.log("Referência: " + listaAnimais[i].referencia);
        }
    }
    home();
}

function listarAnimaisDisponiveis(){

    for(var j = 0; j < listaAnimais.length; j++){
        if(listaAnimais[j].referencia == "disponivel" && listaAnimais[j].situacao == "vivo"){

        console.log("----- " + listaAnimais[j].nome + " -----");
        console.log("Chip: " + listaAnimais[j].chip);
        console.log("Nome: " + listaAnimais[j].nome);
        console.log("Espécie: " + listaAnimais[j].especie);
        console.log("Raça: " + listaAnimais[j].raca);
        console.log("Sexo: " + listaAnimais[j].sexo);
        console.log("Peso: " + listaAnimais[j].peso);
        console.log("Situação: " + listaAnimais[j].situacao); //Importante ao aspecto de listar os Animais VIVOS
        console.log("Referência: " + listaAnimais[j].referencia); //Importante ao aspecto de listar os animais DISPONIVEIS 
        }else{
            alert("Sem animais disponíveis no momento. Tente novamente mais tarde! :)");
        }
    }
    home();
}

function buscarAnimal_Nome(){
    var nome = ler("Insira o nome do animal que deeja encontrar.");
    var pesquisa = false;
    for (var i = 0; i < listaAnimais.length; i++){
        if (nome === listaAnimais[i].nome){
        console.log(" ----- Animais Encontrados ----- ");
        console.log("Chip: " + listaAnimais[i].chip);
        console.log("Nome: " + listaAnimais[i].nome);
        console.log("Espécie: " + listaAnimais[i].especie);
        console.log("Raça:" + listaAnimais[i].raca);
        console.log("Sexo:" + listaAnimais[i].sexo);
        console.log("Peso:"  + listaAnimais[i].peso);
        console.log("Situação: " + listaAnimais[i].situacao);
        console.log("Referência: " + listaAnimais[i].referencia);
        pesquisa = true;     
        }
    }
    if(pesquisa == false && i == listaAnimais.length){ //
        console.log("Ficha inexistente!");
    }
    home();
}

function buscarUsuario_Nome(){
    var nome = ler("Insira o nome do usuário que deseja encontrar.");
    var pesquisa = false;
    for (var i = 0; i < listaUsuarios.length; i++){
        if (nome === listaUsuarios[i].nome){
        console.log(" ----- Usuarios Encontrados ----- ");
        console.log("Nome: " + listaUsuarios[i].nome);
        console.log("CPF: " + listaUsuarios[i].cpf);
        console.log("Sexo: " + listaUsuarios[i].sexo);
        console.log("Nome: " + listaUsuarios[i].nome);
        console.log("Idade: " + listaUsuarios[i].idade);
        console.log("Estado: " + listaUsuarios[i].estado);
        console.log("Cidade: " + listaUsuarios[i].cidade);
        console.log("Bairro: " + listaUsuarios[i].bairro);
        console.log("Rua: " + listaUsuarios[i].rua);
        console.log("Dono de:" + listaUsuarios[i].donoDe);
        pesquisa = true;
        }
    }
    if(pesquisa == false && i == listaUsuarios.length){ //
        console.log("Ficha inexistente!");
    }
    home();
}

function buscarUsuario_Cpf(){
    var cpf = ler("Insira o cpf do usuário que deseja encontrar.");
    var pesquisa = false;
    for (var i = 0; i < listaUsuarios.length; i++){
        if (cpf === listaUsuarios[i].cpf){
        console.log(" ----- Usuario Encontrado ----- ");
        console.log("Nome: " + listaUsuarios[i].nome);
        console.log("CPF: " + listaUsuarios[i].cpf);
        console.log("Sexo: " + listaUsuarios[i].sexo);
        console.log("Nome: " + listaUsuarios[i].nome);
        console.log("Idade: " + listaUsuarios[i].idade);
        console.log("Estado: " + listaUsuarios[i].estado);
        console.log("Cidade: " + listaUsuarios[i].cidade);
        console.log("Bairro: " + listaUsuarios[i].bairro);
        console.log("Rua: " + listaUsuarios[i].rua);
        console.log("Dono de: " + listaUsuarios[i].donoDe);
        pesquisa = true;
        }
    }
    if(pesquisa == false && i == listaUsuarios.length){ //
        console.log("Ficha inexistente!");
    }
    home();
}

function buscarAnimal_Chip(){
    var chip = ler("Insira o chip do animal que deseja encontrar.");
    var pesquisa = false;
    for (var i = 0; i < listaAnimais.length; i++){
        if (chip === listaAnimais[i].chip){
        console.log(" ----- Animal Encontrado ----- ");
        console.log("Chip: " + listaAnimais[i].chip);
        console.log("Nome: " + listaAnimais[i].nome);
        console.log("Espécie: " + listaAnimais[i].especie);
        console.log("Raça: " + listaAnimais[i].raca);
        console.log("Sexo: " + listaAnimais[i].sexo);
        console.log("Peso: " + listaAnimais[i].peso);
        console.log("Situação: " + listaAnimais[i].situacao);
        console.log("Referência: " + listaAnimais[i].referencia);
        pesquisa = true;
        }
    }
    if(pesquisa == false && i == listaAnimais.length){
        console.log("Ficha inexistente!");
    }
    home();
}

function adotarAnimal(){

    var cpf = ler("Digite o CPF da pessoa que quer adotar um animal.");
    for (var i = 0; i < listaUsuarios.length; i++){
        if (cpf === listaUsuarios[i].cpf){
            alert(listaUsuarios[i].nome + ", Portador do cpf " + listaUsuarios[i].cpf + ", foi encontrado.");

            var animal = ler("Digite o chip do animal que deseja adotar")
            for (var j = 0; j < listaAnimais.length; j++){
                if(animal === listaAnimais[j].chip){

                    alert(listaAnimais[j].nome + ", que porta o Chip" + listaAnimais[j].chip + " Foi encontrado.")

                    alert("Atenção, o próximo passo é para confirmar que você quer adotar "+ listaAnimais[j].nome)
                }//Samuel, você recuou esta chave. Quando você acordar e vier arrumar esta function, lembre de testar para ver se vai rodar.
                var opcao = ler("Digite '1' para adotar " + listaAnimais[j].nome + " ou digite '2' para cancelar a operação.")
                switch (opcao) {
                    case "1":
                        listaUsuarios[i].donoDe = listaAnimais[j].nome
                        listaAnimais[j].referencia = "adotado"
                        alert("Que ótima notícia! " + listaAnimais[j].nome + " Foi adotado! :)")
                        break;
                    case "2":
                        alert("Sem problemas, quem sabe numa próxima!");
                        break;
                    default:
                        break;
                }
            }
        }
    }
    home();
}

function editarCadastroUsuario(){
    
    var searchCpf = ler ("Digite o Cpf do usuário para editar")
    var search = false

    // for (var i = 0; i < listaAnimais.length; i++){
    //     if(searchChip == listaAnimais[i].chip){

    for (var i = 0; i < listaUsuarios.length; i++){     
        if(searchCpf == listaUsuarios[i].cpf){
            alert("O CPF " + listaUsuarios[i].cpf + " Do(a) Usuário(a) " + listaUsuarios[i].nome + ", Foi Encontrado. Você já pode editar o cadastro.")
            search = true

            var novoCadastro = ler("1 para modificar cpf.\n 2 para modificar sexo.\n 3 para modificar nome.\n 4 para modificar idade.\n 5 para modificar estado.\n 6 para modificar cidade.\n 7 para modificar bairro.\n 8 para modificar rua")
            switch (novoCadastro) {
                case "1":
                    listaUsuarios[i].cpf = ler("Insira o novo CPF do usuário. Lembre-se, apenas números! Caso você utilize letras, você recebera uma Punição Salarial. Preste atenção! :)")
                    alert("Editado com sucesso! :)")
                    break;
                case "2":
                    listaUsuarios[i].sexo = ler("Insira o novo Sexo do usuário").toLocaleLowerCase();
                    alert("Editado com sucesso! :)")
                    break;
                case "3":
                    listaUsuarios[i].nome = ler("Insira o novo Nome do usuário").toLocaleLowerCase();
                    alert("Editado com sucesso! :)")
                    break;
                case "4":
                    listaUsuarios[i].idade = ler("Insira a nova Idade do usuário");  
                    alert("Editado com sucesso! :)")
                    break;
                case "5":
                    listaUsuarios[i].estado = ler("Insira o novo Estado do usuário").toLocaleLowerCase();
                    alert("Editado com sucesso! :)")
                    break;
                case "6":
                    listaUsuarios[i].cidade = ler("Insira a nova Cidade do usuário").toLocaleLowerCase();
                    alert("Editado com sucesso! :)") 
                    break;
                case "7":
                    listaUsuarios[i].bairro = ler("Insira o novo Bairro do usuário").toLocaleLowerCase();
                    alert("Editado com sucesso! :)")
                    break;
                case "8":
                    listaUsuarios[i].rua = ler("Insira a nova Rua do usuário").toLocaleLowerCase();
                    alert("Editado com sucesso! :)") 
                    break;
                case "9":
                    alert("Redirecionando...")
                    editarCadastroUsuario();
                default:
                    break;
                }
        }        
        if(searchCpf !== listaUsuarios[i].cpf){
            alert("Este Cpf é inválido");
            search = false
        }
    }
    home();
}

function editarCadastroAnimal(){
    var searchChip = ler ("Digite o Chip do Animal para editar")
    var search = false
    for (var i = 0; i < listaAnimais.length; i++){
        if(searchChip == listaAnimais[i].chip){
            alert("O CHIP " + listaAnimais[i].chip + " Do Animal " + listaAnimais[i].nome + ", Foi Encontrado. Você já pode editar o cadastro.")
            search = true
            var novoCadastroAnimais = ler("'1' Para modificar CHIP.\n '2' para modificar NOME.\n '3' para modificar ESPECIE.\n '4' para modificar RAÇA.\n '5' para modificar SEXO.\n '6' para modificar IDADE.\n '7' para modificar PESO.\n '8' para modificar SITUAÇÃO.\n '9' para voltar.")
            switch (novoCadastroAnimais) {
                case "1":
                    listaAnimais[i].chip = ler("Insira o novo CHIP do animal! :)")
                    break;
                case "2":
                    listaAnimais[i].nome = ler("Insira o novo NOME do animal").toLocaleLowerCase();
                    break;
                case "3":
                    listaAnimais[i].especie = ler("Insira a nova ESPÉCIE do animal").toLocaleLowerCase();
                    break;
                case "4":
                    listaAnimais[i].raca = ler("Insira a nova RAÇA do animal");  
                    break;
                case "5":
                    listaAnimais[i].sexo = ler("Insira o novo SEXO do animal").toLocaleLowerCase(); 
                    break;
                case "6":
                    listaAnimais[i].idade = ler("Insira a nova IDADE do animal").toLocaleLowerCase();  
                    break;
                case "7":
                    listaAnimais[i].peso = ler("Insira o novo PESO do animal").toLocaleLowerCase(); 
                    break;
                case "8":
                    // listaAnimais[i].situacao = novaSituacao;
                    var novaSituacao = ler("Digite '1' para VIVO ou '2' para MORTO")
                    switch (novaSituacao) {
                        case "1":
                            listaAnimais[i].situacao = "vivo";
                            break;
                        case "2":
                            listaAnimais[i].situacao = "morto";
                            break;
                        default:
                            break;
                    }                   
                    //ler("Insira a nova situação. Lembre-se '1' para VIVO ou '2' para MORTO! :)").toLocaleLowerCase();  
                    break;
                case "9":
                    alert("Redirecionando...")
                    editarCadastroAnimal();
                    break;
                default:
                    break;
                }
                
        }        
        if(searchChip !== listaAnimais[i].cpf){
            alert("Este Chip é inválido");
            search = false
        }
    }
}

function removerAnimal(){
    
    var chip = ler("Qual o chip do animal que você quer remover?")
    var flag = false
    for(i = 0; i < listaAnimais.length; i++){
        if(chip == listaAnimais[i].chip){
            flag = true
            if(listaAnimais[i].referencia == " disponivel" && listaAnimais[i].situacao == "vivo"){
                alert(listaAnimais[i].nome + " Foi Removido com sucesso!")
                listaAnimais.splice(i, 1);
                home();
            }else{
                alert("O animal não cumpre o requisitos. ")
                home();
            }
        }
    }
    if(flag == false){
        alert("Chip não encontrado")
        home();
    }

}

function removerUsuario(){
    var cpf = ler("Qual o CPF do usuário que você quer remover?")
    var flag = false
    for(i = 0; i < listaUsuarios.length; i++){
        if(cpf == listaUsuarios[i].cpf){
            flag = true
            alert(listaUsuarios[i].nome + " Foi Removido com sucesso!")
            listaUsuarios.splice(i, 1);
            home();
        }else{
            alert("O Usuário não cumpre o requisitos. ")
            home();
        }
    }
    if(flag == false){
        alert("Cpf não encontrado")
        home();
    }
}

// function verificarCpf_Editado(){

//     var usuario = {

//         cpf: null,
//         sexo: null,
//         nome: null,
//         idade: null,
//         estado: null,
//         cidade: null,
//         bairro: null,
//         rua: null,
//         donoDe: null,
//     };
    
//     var flag = false // Esta flag serve para permitir ou não o cadastro do cpf
//     for (let i = 0; i < listaUsuarios.length; i++) {
//         if(usuario.cpf == listaUsuarios[i].cpf){
//             alert("este cpf ja existe")
//             editarCadastroUsuario();
//         }if(usuario.cpf !== listaUsuarios[i].cpf){
//             flag = true
//         }                     
//     }
// }

function home() {

    var selecione = prompt("Digite '1' para cadastrar usuário.\n Digite '2' para cadastrar animal.\n Digite '3' para listar usuarios.\n Digite '4' para listar animais.\n Digite '5' para buscar por nome um usuário.\n Digite '6' para buscar por nome um animal.\n Digite '7' para editar cadastro de Usuario.\n Digite '8' para editar cadastro de Animal.\n Digite '9' para buscar usuário por CPF. \n Digite '10' para buscar animal por CHIP.\n Digite '11' para REMOVER animal. \n Digite '12' para REMOVER usuário.\n Digite '13' para atualizar o sistema.\n Digite '14' para listar animais DISPONIVEIS.\n DIGITE '15' PARA *ADOTAR* :)");

    switch (selecione) {
        case "1":
            cadastrarUsuario();
            break;
        case "2":
            cadastrarAnimal();
            break;
        case "3":
            listarUsuarios();
            break
        case "4":
            listarAnimais();
            break;
        case "5":
            buscarUsuario_Nome();
            break;
        case "6":
            buscarAnimal_Nome();
            break;
        case "7":
            editarCadastroUsuario();
            break;
        case "8":
            editarCadastroAnimal();
            break;
        case "9":
            buscarUsuario_Cpf();
            break;
        case "10":
            buscarAnimal_Chip();
            break;
        case "11":
            removerAnimal();
            break;
        case "12":
            removerUsuario();
            break;
        case "13":
            alert("Estamos atualizando o sistema...")
            alert("Você sabia que o Palmeiras não tem Mundial?\n Atualizando...")
            alert("Você sabia que David Sodré Lins apanhou 3423 vezes para o HTML? \n Atualizando...")
            alert("Você sabia que 1+1 é igual 2? \n Atualizando...")
            alert("Você sabia que Messi é melhor que CR7? \n Atualizando...")
            alert("Você sabia que o JavaScript é a melhor linguagem de programação do mundo? \n Atualizando...")
            alert("Pronto, o sistema finalmente atualizou! Faça bom uso! :)")
            home();
            break;
        case "14":
            listarAnimaisDisponiveis()
            break;
        case "15":
            adotarAnimal();
            break;
        default:
            break;
    }
}

//Function ler. Importante para o processo da leitura de strings e de numbers.
function ler(mensagem = "Informe o valor: ", tipo = "string"){
    if (tipo === "int") {
        var valor = Number(prompt(mensagem));
    }
    if (tipo === "string") {
        var valor = prompt(mensagem);
    }
    return valor;
}