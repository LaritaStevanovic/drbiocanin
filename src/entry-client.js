// Klijent NE učitava React — HTML je već generisan (SSG). Šaljemo samo lagane interakcije.
import './styles.css';
import { init } from './interactions.js';

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
