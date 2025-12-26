
/**
 * Serwis do obsługi globalnego licznika odwiedzin przy użyciu CounterAPI V2.
 * Dokumentacja: https://docs.counterapi.dev/api/endpoints/v2/
 * 
 * Konfiguracja:
 * Workspace: tw-scavenge-pro-2025
 * Nazwa licznika: first-counter-2278 (potwierdzony działający endpoint)
 * 
 * UWAGA: Używamy trybu PUBLICZNEGO (bez klucza API w nagłówku), 
 * ponieważ przeglądarki blokują zapytania z autoryzacją (CORS) do zewnętrznych API.
 */

const WORKSPACE = 'tw-scavenge-pro-2025';
const COUNTER_NAME = 'first-counter-2278';

// Klucz lokalny do zapisu w przypadku awarii sieci
const FALLBACK_KEY = 'tw_total_visits';

export const incrementVisitCount = async (): Promise<number> => {
  try {
    // Endpoint V2: https://api.counterapi.dev/v2/:workspace/:name/up
    // Metoda: GET
    // Usunięto nagłówek Authorization, aby uniknąć błędu CORS w przeglądarce.
    const url = `https://api.counterapi.dev/v2/${WORKSPACE}/${COUNTER_NAME}/up`;
    
    // Używamy fetch bez dodatkowych nagłówków, co jest bezpieczne dla przeglądarki
    const response = await fetch(url);
    
    if (!response.ok) {
        // Jeśli licznik nie istnieje (404), API V2 zazwyczaj tworzy go automatycznie przy pierwszym 'up'.
        // Jeśli jednak wystąpi inny błąd, rzucamy wyjątek, aby przejść do trybu offline.
        console.error(`Błąd CounterAPI V2: ${response.status} ${response.statusText}`);
        throw new Error(`Błąd API: ${response.status}`);
    }

    const result = await response.json();
    
    // Obsługa struktury V2 na podstawie Twojego screenshota:
    // { "code": "200", "data": { "up_count": 123, ... }, ... }
    if (result.data && typeof result.data.up_count === 'number') {
        return result.data.up_count;
    }
    
    // Fallback dla starszych wersji API (V1 zwracało { count: 123 })
    return result.count || 0;

  } catch (error) {
    console.warn('Globalny licznik niedostępny (Błąd sieci/CORS/AdBlock). Przełączam na tryb lokalny (Offline Mode).');
    
    // Fallback: Użyj LocalStorage jeśli API nie działa
    const stored = localStorage.getItem(FALLBACK_KEY);
    let count = 0;

    if (stored) {
      count = parseInt(stored) + 1;
    } else {
      // Startowa wartość "bazowa", aby licznik wyglądał imponująco przy pierwszym uruchomieniu
      count = 15423 + 1; 
    }

    localStorage.setItem(FALLBACK_KEY, count.toString());
    return count;
  }
};

export const getVisitCount = async (): Promise<number> => {
    try {
        // Endpoint V2 do pobrania stanu (bez inkrementacji)
        const response = await fetch(`https://api.counterapi.dev/v2/${WORKSPACE}/${COUNTER_NAME}`);

        if (!response.ok) throw new Error('Błąd API');
        const result = await response.json();
        
        // Ta sama logika parsowania co wyżej
        if (result.data && typeof result.data.up_count === 'number') {
            return result.data.up_count;
        }
        return result.count || 0;

    } catch (error) {
        const stored = localStorage.getItem(FALLBACK_KEY);
        return stored ? parseInt(stored) : 15423;
    }
}
