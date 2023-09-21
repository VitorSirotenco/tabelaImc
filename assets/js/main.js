    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')


    function recebeEventoForm(evento) {
        evento.preventDefault();

        const pesoInput = form.querySelector('.peso');
        const alturaInput = form.querySelector('.altura');
        const peso = parseFloat(pesoInput.value); // Converter o valor para um número
        const altura = parseFloat(alturaInput.value); // Converter o valor para um número

        if (!peso) {
            setResultado('Peso inválido', false);
            return;
        }

        if (!altura) {
            setResultado('Altura inválida', false);
            return;
        }

        const imc = getImc(peso, altura)
        const nivel = nivelIMC(imc)

        function getImc(peso, altura) {
            const imc = peso / altura ** 2;
            return imc.toFixed(2);
        }

        const msg = `Seu IMC é ${imc} (${nivel}).`;

        setResultado(msg, true);

        function nivelIMC(imc) {
            if (imc < 18.5) {
                return ("Abaixo do peso");
            } else if (imc >= 18.5 && imc <= 24.9) {
                return ("Peso normal");
            } else if (imc >= 25 && imc <= 29.9) {
                return ("Sobrepeso");
            } else if (imc >= 30 && imc <= 34.9) {
                return ("Obesidade grau 1");
            } else if (imc >= 35 && imc <= 39.9) {
                return ("Obesidade grau 2");
            } else {
                return ('Obesidade grau 3')
            }
        }

        function criaP() {
            const p = document.createElement('p');
            return p;
        }

        function setResultado(msg, isValid) {
            const resultado = document.querySelector('.resultado');
            resultado.innerHTML = '';

            const p = criaP();

            if (isValid) {
                p.classList.add('paragrafo-resultado');
            } else {
                p.classList.add('bad');
            }

            p.innerHTML = msg;
            resultado.appendChild(p);
        }

    }

    form.addEventListener('submit', recebeEventoForm); //capturar evento de submit do form


