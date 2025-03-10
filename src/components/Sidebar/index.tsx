// Sidebar.js
import { Container, Content } from './styles';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import parse from 'html-react-parser';

export function Sidebar() {
    const [day, setDay] = useState('');
    const [menu, setMenu] = useState('');

    // Função para sanitizar o HTML removendo SVGs e imagens problemáticas
    function sanitizeHtml(html) {
        if (!html) return '';
        return html.replace(/<svg[^>]*>.*?<\/svg>/g, '')
                  .replace(/<img[^>]*>/g, '');
    }

    async function getData() {
        try {
            const response = await fetch('/api/menu');
            const data = await response.json();
            
            // Aplicando a sanitização antes de definir os estados
            setDay(sanitizeHtml(data.day));
            setMenu(sanitizeHtml(data.menu));
        } catch (error) {
            console.error("Erro ao buscar dados do menu:", error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const [value, onChange] = useState(new Date());

    return (
        <Container>
            <div>
                <Calendar onChange={onChange} value={value} locale="pt-BR" />
            </div>
            <Content>
                <span>{parse(day)}</span>
                <p>{parse(menu)}</p>
            </Content>
        </Container>
    );
}