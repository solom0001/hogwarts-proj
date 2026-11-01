# Pseudokode

### Student CRUD funktioner pseudokode(afspejler teachers, houses, courses)

function getAllStudents()
Kører når serveren modatger en GET request

    Prøv:
        Eksikvere SQL i databasen, som henter alle students fra students table
        Gemme resultat i en variable studens

            if (students indeholder data):
                Send students.rows tilbage som JSON med status 200

            else:
            error status 404(data blev ikke fundet)

    Fang fejl:
        log fejl
        send serverfejl 500 som response.

Funktion getSingleStudent()
Kører når serveren modtager en GET request med et id i URL'en

    Prøv:
        Hent og gem id fra request parametrene
        Eksekver SQL i databasen, som henter den studerende med det id fra students table
        Gem resultatet i variablen student

        if (student indeholder data):
            Send student.rows[0] tilbage som JSON med status 200
        else:
            error status 404(data blev ikke fundet)

    Fang fejl:
        Log fejlen
        Send serverfejl som response med status 500

Funktion createStudent()
Kører når serveren modtager en POST request med data i body

    Prøv:
        inkludere nødvendig data for at lave en student i db, i body af request
        Eksekver SQL i databasen, som indsætter en ny studerende i students tabellen
        Gem resultatet i variablen student

            if (student indeholder data):
                 Send student.rows[0] tilbage som JSON med status 200
            else:
                Send status 404

    Fang fejl:
        Log fejlen
        Send serverfejl som response med status 500

Funktion updateStudent()
Kører når serveren modtager en PUT request med et id i URL'en og data i body

    Prøv:
        Hent og gem id fra request parametrene
        inkludere nødvendig data for at opdatere student i body af request
        Eksekver SQL i databasen, som opdattere studerende data med id'en fra params, i students tabellen
        Gem resultatet i variablen student

            if (student indeholder data):
                Send student.rows[0] tilbage som JSON med status 200
            else:
                Send status 404

    Fang fejl:
        Log fejlen
        Send serverfejl som response med status 500

Funktion deleteStudent()
Kører når serveren modtager en DELETE request med et id i URL'en

    Prøv:
        Hent id fra request parametrene
        Eksekver SQL i databasen, som sletter den studerende med det id fra students tabellen
        Gem resultatet i variablen student

            if (student.rows indeholder data):
                Send status 204 uden indhold
            else:
                Send status 404

    Fang fejl:
        Log fejlen
         Send serverfejl som response med status 500
