const form = document.getElementById("form");
const cep = document.getElementById("cep");
const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");

        function buscaCep(valor){
            const mensagem = document.getElementById("msgErro");
            if(mensagem){
                form.removeChild(mensagem);
            }

            var cepValido = valor.replace(/\D/g, "");
            if(cepValido != ""){
                var padraoCEP = /^[0-9]{8}$/;
                if(padraoCEP.test(cepValido)){

                    rua.value = "buscando...";
                    bairro.value = "buscando...";
                    cidade.value = "buscando...";
                    estado.value = "buscando...";

//URL: URL: viacep.com.br/ws/01001000/json/?callback=callback_name
            const script = document.createElement("script");
            script.src = `https://viacep.com.br/ws/${cepValido}/json/?callback=retorno`;
                    document.body.appendChild(script);
                } else{
                msgErro("Inválido")
                }
            }else{
            msgErro("Preencha Corretamente");
            }
        }

        function retorno(resposta){
            if(!("erro" in resposta)){
                cep.value = resposta.cep;
                rua.value = resposta.logradouro;
                bairro.value = resposta.bairro;
                cidade.value = resposta.localidade;
                estado.value = resposta.uf;
            }else {
                msgErro("Deu erro")
            }

        }

        function msgErro(msg){
            erro = document.createElement("label");
            erro.style.color = "red";
            erro.style.fontWeight = "bold";
            erro.id = "msgErro";
            erro.innerText = " CEP: " + cep.value + " " + msg;

            //form.insertBefore(erro, cep.nextSibling)
            cep.parentNode.insertBefore(erro, cep.nextSibling);
            form.reset();
        }