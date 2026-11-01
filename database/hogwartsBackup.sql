--
-- PostgreSQL database dump
--

\restrict xDFxA6a9jTA57niL8n50ZrqwpDbortj7DlaYUrdcCP2kGrNSKpNRyneTZRff8VT

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.4

-- Started on 2026-11-01 09:11:41

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 225 (class 1259 OID 16754)
-- Name: courses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.courses (
    id integer NOT NULL,
    course_name character varying(60) CONSTRAINT courses_name_not_null NOT NULL,
    teacher_id integer NOT NULL
);


ALTER TABLE public.courses OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16753)
-- Name: courses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.courses ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.courses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 220 (class 1259 OID 16718)
-- Name: houses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.houses (
    id integer CONSTRAINT house_id_not_null NOT NULL,
    house_name character varying(60) CONSTRAINT house_name_not_null NOT NULL,
    house_colors character varying(60) CONSTRAINT house_colors_not_null NOT NULL,
    founder character varying(60)
);


ALTER TABLE public.houses OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16717)
-- Name: house_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.houses ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.house_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 227 (class 1259 OID 16778)
-- Name: student_courses_ft; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.student_courses_ft (
    student_id integer CONSTRAINT student_course_ft_student_id_not_null NOT NULL,
    course_id integer CONSTRAINT student_course_ft_course_id_not_null NOT NULL
);


ALTER TABLE public.student_courses_ft OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16740)
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.students (
    id integer NOT NULL,
    student_name character varying(60) CONSTRAINT students_name_not_null NOT NULL,
    house_id integer,
    start_year integer CONSTRAINT students_year_not_null NOT NULL
);


ALTER TABLE public.students OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16768)
-- Name: students_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.students ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.students_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 222 (class 1259 OID 16727)
-- Name: teachers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teachers (
    id integer NOT NULL,
    teacher_name character varying(60) CONSTRAINT teachers_name_not_null NOT NULL,
    house_id integer NOT NULL
);


ALTER TABLE public.teachers OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16726)
-- Name: teachers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.teachers ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.teachers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 5043 (class 0 OID 16754)
-- Dependencies: 225
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (1, 'Transfiguration', 1);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (2, 'Potions', 2);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (3, 'Charms', 3);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (4, 'Herbology', 4);


--
-- TOC entry 5038 (class 0 OID 16718)
-- Dependencies: 220
-- Data for Name: houses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (1, 'Gryffindor', 'Scarlet and gold', 'Godric Gryffindor');
INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (2, 'Slytherin', 'Green and silver', 'Salazar Slytherin');
INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (3, 'Ravenclaw', 'Blue and bronze', 'Rowena Ravenclaw');
INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (4, 'Hufflepuff', 'Yellow and black', 'Helga Hufflepuff');


--
-- TOC entry 5045 (class 0 OID 16778)
-- Dependencies: 227
-- Data for Name: student_courses_ft; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.student_courses_ft VALUES (1, 1);
INSERT INTO public.student_courses_ft VALUES (5, 1);
INSERT INTO public.student_courses_ft VALUES (1, 2);
INSERT INTO public.student_courses_ft VALUES (3, 2);
INSERT INTO public.student_courses_ft VALUES (1, 3);
INSERT INTO public.student_courses_ft VALUES (4, 3);
INSERT INTO public.student_courses_ft VALUES (3, 3);
INSERT INTO public.student_courses_ft VALUES (5, 4);
INSERT INTO public.student_courses_ft VALUES (4, 4);


--
-- TOC entry 5041 (class 0 OID 16740)
-- Dependencies: 223
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (5, 'Cedric Diggory', 4, 2012);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (4, 'Luna Lovegood', 3, 2013);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (3, 'Draco Malfoy', 2, 2012);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (6, 'Ron Weasley', 2, 2014);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (1, 'Brock Lesnar', 3, 2013);


--
-- TOC entry 5040 (class 0 OID 16727)
-- Dependencies: 222
-- Data for Name: teachers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (1, 'Minerva McGonagall', 1);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (2, 'Severus Snape', 2);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (3, 'Filius Flitwick', 3);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (4, 'Pomona Sprout', 4);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (5, 'Albus Dumbledore', 2);


--
-- TOC entry 5051 (class 0 OID 0)
-- Dependencies: 224
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courses_id_seq', 5, true);


--
-- TOC entry 5052 (class 0 OID 0)
-- Dependencies: 219
-- Name: house_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.house_id_seq', 4, true);


--
-- TOC entry 5053 (class 0 OID 0)
-- Dependencies: 226
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.students_id_seq', 6, true);


--
-- TOC entry 5054 (class 0 OID 0)
-- Dependencies: 221
-- Name: teachers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teachers_id_seq', 5, true);


--
-- TOC entry 4882 (class 2606 OID 16761)
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- TOC entry 4876 (class 2606 OID 16725)
-- Name: houses house_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.houses
    ADD CONSTRAINT house_pkey PRIMARY KEY (id);


--
-- TOC entry 4884 (class 2606 OID 16784)
-- Name: student_courses_ft student_course_ft_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_courses_ft
    ADD CONSTRAINT student_course_ft_pkey PRIMARY KEY (student_id, course_id);


--
-- TOC entry 4880 (class 2606 OID 16747)
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);


--
-- TOC entry 4878 (class 2606 OID 16734)
-- Name: teachers teachers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_pkey PRIMARY KEY (id);


--
-- TOC entry 4887 (class 2606 OID 16762)
-- Name: courses courses_teacher_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_teacher_id_fkey FOREIGN KEY (teacher_id) REFERENCES public.teachers(id) ON DELETE RESTRICT;


--
-- TOC entry 4888 (class 2606 OID 16790)
-- Name: student_courses_ft student_course_ft_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_courses_ft
    ADD CONSTRAINT student_course_ft_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;


--
-- TOC entry 4889 (class 2606 OID 16785)
-- Name: student_courses_ft student_course_ft_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_courses_ft
    ADD CONSTRAINT student_course_ft_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.students(id) ON DELETE CASCADE;


--
-- TOC entry 4886 (class 2606 OID 16748)
-- Name: students students_house_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_house_id_fkey FOREIGN KEY (house_id) REFERENCES public.houses(id);


--
-- TOC entry 4885 (class 2606 OID 16735)
-- Name: teachers teachers_house_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_house_id_fkey FOREIGN KEY (house_id) REFERENCES public.houses(id);


-- Completed on 2026-11-01 09:11:42

--
-- PostgreSQL database dump complete
--

\unrestrict xDFxA6a9jTA57niL8n50ZrqwpDbortj7DlaYUrdcCP2kGrNSKpNRyneTZRff8VT

