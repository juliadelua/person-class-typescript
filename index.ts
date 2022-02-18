// Import stylesheets
import { Person } from './person';
import './style.css';

let persona = new Person('Ana', 'Madelaine', 'Karenina', 32);
let another = new Person('David', 'Dorian', 'Black', 25);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<div>
<h1>Creating a "Person" Class:</h1>
<p>Yes, we have people! You can learn about them as follows:</p>
<br/>
<p>The first person is <span> ${persona.getFullName()}</span>, born in <span>${persona.getBirthdayYear()}</span>.<p>The second person is <span>${another.getFullName()}</span>, born in <span>${another.getBirthdayYear()}</span>.</p>
</h1>
<br/><br/>
<p>Project made in February 18, 2022. By Julia Gato.</p>
</div>`;