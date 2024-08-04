function clockCalendar() {
    const time = new Date();

    // Creiamo le variabili di data e ora
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekDay = weekDays[time.getDay()];
    const day = time.getDate();
    const month = time.getMonth() + 1; // Aggiungiamo il +1 perché i mesi sono indicizzati da 0
    const year = time.getFullYear();
    const hour = time.getHours().toString().padStart(2, '0');
    const minute = time.getMinutes().toString().padStart(2, '0');
    const second = time.getSeconds().toString().padStart(2, '0');

    // Creiamo la stringa dell'ora e del giorno
    const formattedDateHour = `${weekDay}, ${day}/${month}/${year} ${hour}:${minute}:${second}`;

    // Mostriamo l'elemento all'interno del file HTML con l'id "orario"
    document.getElementById('orario').innerHTML = formattedDateHour;
}

// Impostiamo l'intervallo di aggiornamento dell'orario
setInterval(clockCalendar, 1000);

// Chiamata iniziale per evitare il ritardo di 1 secondo
clockCalendar();

function addToDoItem() {
    const inputText = document.getElementById('input-text').value;

    if (inputText.trim() !== '') {
        const ul = document.getElementById('todo-list');
        const li = document.createElement('li'); // Creiamo un nuovo elemento 'li'
        li.textContent = inputText;
        ul.appendChild(li);

        // Pulisce il campo input dopo l'aggiunta
        document.getElementById('input-text').value = '';
    }
}

// Aggiungi un listener per il click sul bottone
document.getElementById('add-button').addEventListener('click', addToDoItem);
