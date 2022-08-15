    const firstDiv = document.querySelector('.first-step');
    const secondDiv = document.querySelector('.second-step');
    const finalDiv = document.querySelector('.final-step');

    


    function go(currentStep,nextStep)
    {
        let dNone, dBlock;
        if(currentStep == 1)
        {
            dNone = firstDiv;
        }
        else if(currentStep == 2)
        {
            dNone = secondDiv;
        }
        else
        {
            dNone = finalDiv;
        }
        
        dNone.style.display = 'none';

        if(nextStep == 1)
        {
            dBlock = firstDiv;
        }
        else if(nextStep == 2)
        {
            dBlock = secondDiv;
        }
        else
        {
            dBlock = finalDiv;
        }
        dBlock.style.display = 'block';
    }

    function validate()
    {
        const peso   = document.getElementById('peso');
        const altura = document.getElementById('altura');
        
        peso.style.border   = 'none';
        altura.style.border = 'none';
        if(!peso.value || !altura.value)
        {
            if(!peso.value && !altura.value)
            {
                peso.style.border = '1px solid red';
                altura.style.border = '1px solid red';
                alert('Você deve preencher seu peso e a sua altura')
            }
            else if(!peso.value)
            {
                peso.style.border = '1px solid red';
                alert('Você deve preencher seu peso e a sua altura')
            }
            else
            {
                altura.style.border = '1px solid red';
                alert('Você deve preencher seu peso e a sua altura')
            }
        }
        else
        {           
            const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
            let classificacao = '';
            const result = document.getElementById('resultado');
            const nome = document.getElementById('nome').value;
            if(imc < 18.5)
            {
                classificacao = 'abaixo do peso.';
                result.style.color = 'yellow';
                result.innerHTML = result.innerHTML = `${nome} seu IMC é ${imc} e você está ${classificacao}`;
            }
            else if(imc >= 18.5 && imc < 25)
            {
                classificacao = 'com o peso ideal. Parabéns!!!';
                result.innerHTML = result.innerHTML = `${nome} seu IMC é ${imc} e você está ${classificacao}`;
            }
            else if(imc >= 25 && imc < 30)
            {
                classificacao = 'levemente acima do peso.';
                result.innerHTML = result.innerHTML = `${nome} seu IMC é ${imc} e você está ${classificacao}`;
            }
            else if(imc >= 30 && imc < 35)
            {
                classificacao = 'com obesidade grau I Atenção: Procure um especialista';
                result.innerHTML = result.innerHTML = `${nome} seu IMC é ${imc} e você está ${classificacao}`;
            }
            else if (imc >= 35 && imc < 40) 
            {
                classificacao = 'com obesidade grau II Atenção: Procure um especialista';
                result.innerHTML = result.innerHTML = `${nome} seu IMC é ${imc} e você está ${classificacao}`;
            }
            else
            {
                classificacao = 'com obesidade grau III Muita atenção: Procure um especialista';
                result.innerHTML = `${nome} seu IMC é ${imc} e você está ${classificacao}`;
                
            };  

            const shareData = {
                title: 'Meu Resultado',
                text: validate.innerHTML = `${nome} seu IMC é ${imc} e você está ${classificacao}` + ' Este foi o meu Resultado! Que tal Descobrir o seu? ',
                url: 'http://127.0.0.1:5500/00-IMC/index.html#'
              }
              
              const btn = document.querySelector('.compartilhar');
              const resultPara = document.querySelector('.compartilhar');
              
              // Share must be triggered by "user activation"
              btn.addEventListener('click', async () => {
                try {
                  await navigator.share(shareData);
                  alert('Compartilhado com Sucesso')
                  /*resultPara.textContent = 'Compartilhado com Sucesso';*/
                } catch (err) {
                  /*alert(`Erro: ${err}`);*/
                    resultPara.textContent = `Erro: ${err}`;
                }
              });
            
            go(2,3);    

        }
              
    
    }

