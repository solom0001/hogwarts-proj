# Hogwarts projekt

### 1.Semester Webudviklings projekt.

## Setup

### 1. Installer dependencies

```bash
npm install
```

### 2. Skab databasen

1. Skab databasen ved at lave en ny database i pgAdmin4 og kalde den for hogwarts.
2. Højre klik på din database og åbn sql tool'en, derinde importere filen `hogwartsBackup.sql` som ligger i `database` mappen.
3. Kører script filen ved at trykke på play knappen og refresh databasen.

### 3. Sæt op `.env`

Se `.env.example`

### 4. Start server via:

```bash
npm start
```

## Endpoints

Endpoint collections findes også i hogwarts-API-test mappen.

Kør dem via Bruno extension i VScode.

### Houses

| Method | Route       | Beskrivelse          |
| ------ | ----------- | -------------------- |
| GET    | /houses     | Hent alle houses     |
| GET    | /houses/:id | Hent et enkelt house |

### Students

| Method | Route         | Beskrivelse               |
| ------ | ------------- | ------------------------- |
| GET    | /students     | Hent alle studerende      |
| GET    | /students/:id | Hent en enkelt studerende |
| POST   | /students     | Opret en ny studerende    |
| PUT    | /students/:id | Opdater en studerende     |
| DELETE | /students/:id | Slet en studerende        |

### Teachers

| Method | Route         | Beskrivelse          |
| ------ | ------------- | -------------------- |
| GET    | /teachers     | Hent alle lærere     |
| GET    | /teachers/:id | Hent en enkelt lærer |
| POST   | /teachers     | Opret en ny lærer    |
| PUT    | /teachers/:id | Opdater en lærer     |
| DELETE | /teachers/:id | Slet en lærer        |

### Courses

| Method | Route        | Beskrivelse           |
| ------ | ------------ | --------------------- |
| GET    | /courses     | Hent alle courses     |
| GET    | /courses/:id | Hent en enkelt course |
| POST   | /courses     | Opret en ny course    |
| PUT    | /courses/:id | Opdater en course     |
| DELETE | /courses/:id | Slet en course        |
