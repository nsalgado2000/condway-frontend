//Colocação de "." e "-" no local correto, cnpj
const cnpj = document.getElementById('cnpj')
cnpj.addEventListener('keypress', () => {
    let cnpjLength = cnpj.value.length
    if (cnpjLength == 2 || cnpjLength == 6) {
        cnpj.value += '.'
    }else if (cnpjLength == 10) {
        cnpj.value += '/'
         }else if (cnpjLength == 15) {
        cnpj.value += '-'
    }
}) 

//Começo do viacep
    let timeout = null;

    function consultarCEP() {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            const cep = document.getElementById('cep').value;

            // Verifica se o CEP tem 8 dígitos e é numérico
            const cepValido = /^\d{5}-?\d{3}$/.test(cep);
            let c = document.getElementById('message')
            if (!cepValido) {
                limparResultado();
                return
            }

            // Faz a solicitação à API do ViaCEP
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    if (data.erro) {
                        limparResultado();
                        return;
                    }

                    // Atualiza os elementos HTML com os dados retornados
                    document.getElementById('logradouro').value = `${data.logradouro}`;
                    document.getElementById('bairro').value = `${data.bairro}`;
                    document.getElementById('cidade').value = `${data.localidade}`;
                    document.getElementById('estado').value = `${data.uf}`;
                })
                .catch(error => {
                    console.error("Erro ao consultar o CEP:", error);
                    limparResultado();
                });
        }, 500); // Aguarda 500ms após a última entrada do usuário antes de verificar
    }

    function limparResultado() {
        document.getElementById('logradouro').innerText = "";
        document.getElementById('bairro').innerText = "";
        document.getElementById('cidade').innerText = "";
        document.getElementById('estado').innerText = "";
    }

    //Fim do viacep

//Set variáveis para disparo span com mensagem de erro
        const formEl = document.getElementById('formEl')
        const campos = document.querySelectorAll('.required')
        const spans = document.querySelectorAll('.span-required')

//Set verificaçao de erro ao fazer submit 
        formEl.addEventListener('submit', (event) =>{
            event.preventDefault();
            let sucessmessage = document.getElementById('sucessMessage')
            if(nameValidate() && cnpjValidate() && cepValidate() && bairroValidate() && ruaValidate() && numeroValidate() && cidadeValidate() && estadoValidate() && torreValidate() && unidadesValidate() && elevadorValidate() && portariaValidate() && canalizadoValidate() && gindividualValidate() && aindividualValidate() && poçoValidate() && aqaguaValidate() && aqpiscinaValidate() && placaValidate() && segurançasValidate() && cftvValidate() && cdaValidate() && ivaValidate() && cercaValidate() && concertinaValidate() && alarmeValidate() && testando()){
                sucessmessage.style.display = 'block';
                const formData = new FormData(formEl);
                const data = Object.fromEntries(formData);
                fetch('https://reqres.in/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then(res => res.json()).then(data => console.log(data));
                
                // Armazena os dados no Local Storage
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(data);
        localStorage.setItem('users', JSON.stringify(users));

        // Redireciona para a página de data table
        window.location.href = 'datatable.html';
                
            } else{
                alert('Opa, algo deu errado. confira as informações que você passou')
            }
            event.preventDefault();
            nameValidate();
            cnpjValidate();
            cepValidate();
            bairroValidate();
            ruaValidate();
            numeroValidate();
            cidadeValidate();
            estadoValidate();
            torreValidate();
            unidadesValidate();
            elevadorValidate();
            portariaValidate();
            canalizadoValidate();
            gindividualValidate();
            aindividualValidate();
            poçoValidate();
            aqaguaValidate();
            aqpiscinaValidate();
            placaValidate();
            segurançasValidate();
            cftvValidate();
            cdaValidate();
            ivaValidate();
            cercaValidate();
            concertinaValidate();
            alarmeValidate()
        }
    )
        
        //Funçoes para setar mensagem de erro e remover mensagem de erro se estiver tudo dentro dos conformes

        function setError(index){
                campos[index].style.border = '2px solid #e63636';
                spans[index].style.display = 'block'
        }


        function removeError(index){
            campos[index].style.border = '';
            spans[index].style.display = 'none'
        }

        //Funções para verificação e disparo de span*/

        function nameValidate(){
        if(campos[0].value.length < 2)
            {
                setError(0);
            }
        else{
                removeError(0);
                return true
        }       
        }

        function cnpjValidate(){
            if(campos[1].value.length < 18)
                {
                    setError(1);
                }
            else{
                    removeError(1);
                    return true
            }
            }

        function cepValidate(){
        if(campos[2].value.length < 8)
        {
        setError(2);
        }
        else{
        removeError(2);
        return true
                }
                } 

        function bairroValidate(){
        if(campos[3].value.length < 3)
        {
        setError(3);
        
        }
        else{
        removeError(3);
        return true
        }
        }

        function ruaValidate(){
        if(campos[4].value.length < 3 )
        {
        setError(4);
        
                }
        else{
        removeError(4);
        return true
        }
        }
        
        function numeroValidate(){
        if(campos[5].value.length < 1 )
        {setError(5);
            
        }
        else{removeError(5);
            return true
        }
        }

        function cidadeValidate(){
        if(campos[6].value.length < 3 )
        {setError(6);

            
        }
        else{removeError(6);
            return true
        }
        }
        
  
        function estadoValidate(){
        if(campos[7].value == '')
        {setError(7);
            
        }
        else
        {removeError(7);
            return true
        }
        }

        function torreValidate(){
        if(campos[8].value.length < 1 )
        {setError(8);
            
        }
        else{removeError(8);
            return true
        }
        }
    
        

        function unidadesValidate(){
        if(campos[9].value.length < 1 )
        {setError(9);
        
        }
        else{
        removeError(9);
        return true}
        }                             

        function elevadorValidate(){
        if(campos[10].value == '')
        {setError(10);
            
        }
        else
        {removeError(10);
            return true
        }
        }

        function portariaValidate(){
        if(campos[11].value == '')
        {setError(11);
        
        }
        else
        {removeError(11);
            return true
        }
        }

        function canalizadoValidate(){
        if(campos[12].value == '')
        {setError(12);
            
        }
        else
        {removeError(12);
            return true
        }
        }

        function gindividualValidate(){
        if(campos[13].value == '')
        {setError(13);
            
        }
        else
        {removeError(13);
            return true
        }
        }

        function aindividualValidate(){
        if(campos[14].value == '')
        {setError(14);
            
        }
        else
        {removeError(14);
            return true
        }
        }

        function poçoValidate(){
        if(campos[15].value == '')
        {setError(15);
            
        }
        else
        {removeError(15);
            return true
        }
        }      
                                                             
        function aqaguaValidate(){
        if(campos[16].value == '')
        {setError(16);
            
        }
        else
        {removeError(16);
            return true
        }
        }   

        function aqpiscinaValidate(){
        if(campos[17].value == '')
        {setError(17);
            
        }
        else
        {removeError(17);
            return true
        }
        }   
        function placaValidate(){
        if(campos[18].value == '')
        {setError(18);
        
        }
        else
        {removeError(18);
            return true
        }
        }  

        function segurançasValidate(){
        if(campos[19].value == '')
        {setError(19);
        
        }
        else
        {removeError(19);
            return true
        }
        }  

        function cftvValidate(){
        if(campos[20].value == '')
        {setError(20);
            
        }
        else
        {removeError(20);
            return true
        }
        }  

        function cdaValidate(){
        if(campos[21].value == '')
        {setError(21);

        }
        else
        {removeError(21);
            return true
        }
        }  

        function ivaValidate(){
        if(campos[22].value == '')
        {setError(22);
            
        }
        else
        {removeError(22);
            return true
        }
        }  

        function cercaValidate(){
        if(campos[23].value == '')
        {setError(23);
            
        }
        else
        {removeError(23);
            return true
        }
        }  

        function concertinaValidate(){
        if(campos[24].value == '')
        {setError(24);
            
        }
        else
        {removeError(24);
            return true
        }
        }  
        
        function alarmeValidate(){
        if(campos[25].value == '')
        {setError(25);
            
        }
         else
        {removeError(25);
            return true
        }
        }  
         
        
                //Combinar variáveis de validação de cep e consulta de cep com o ViaCep
                function combineVariables() {
                    const var1 = consultarCEP();
                    const var2 = cepValidate();;
                    // Combine as duas variáveis
                    const combinedValue = var1 + var2;
                }


                document.getElementById('cnpj').addEventListener('input', function (e) {
                    this.value = this.value.replace(/[a-zA-Z]/g, '');;
                });
                document.getElementById('cep').addEventListener('input', function (e) {
                    this.value = this.value.replace(/[^0-9]/g, '');;
                });
                
                function testando(){
                    const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
                    // Pegue o valor do input
                    const valorInput = document.getElementById('cnpj').value;
                    const y = document.getElementById('x');
                    const borda = document.getElementById('cnpj')
                    // Teste o regex
                    if (regex.test(valorInput)) {
                        y.style.display = 'none'
                        return true
                    } else {
                        
                        y.style.display = 'block'
                        borda.style.border = '2px solid #e63636'
                        
                    }
                }
                //Teste das duas variáveis de cnpj
                function variaveisCombinadas(){
                    const var3 = cnpjValidate()
                    const var4 = testando()
                }
                
                //Fechar mensagem de sucesso
                let fecharMensagemSucesso = document.getElementById('fechar')
                fecharMensagemSucesso.addEventListener('click', fecharmensagem)
                function fecharmensagem(){
                    let sucessmessage = document.getElementById('sucessMessage')
                    sucessmessage.style.display = 'none'
                    }
                
