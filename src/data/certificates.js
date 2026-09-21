// ─── Certificate Assets ──────────────────────────────────────────────────────
import aiCert          from '../assets/certificates/Artificial Intelligence.pdf'
import blueStockCert   from '../assets/certificates/Blue stock BFDA83598.jpg'
import codingNinjas    from '../assets/certificates/codingNinjas.jpg'
import cybersecurity   from '../assets/certificates/cybersecurity.jpg'
import dbms            from '../assets/certificates/DBMS.jpg'
import flipkart        from '../assets/certificates/Flipcart_participation.pdf'
import hackersHack     from '../assets/certificates/hackers_hackthon.jpg'
import kattaMadhuriPdf from '../assets/certificates/KATTA MADHURI-1.pdf'
import jntuv           from '../assets/certificates/Katta_Madhuri_Certificate_JNTUV.pdf'
import microsoft       from '../assets/certificates/Microsoft.jpg'
import ncat            from '../assets/certificates/NCAT.jpg'
import python          from '../assets/certificates/python.pdf'
import pythonEssentials from '../assets/certificates/PythonEssentials1Update20260624-31-kli16x.pdf'
import talentio        from '../assets/certificates/Talentio.jpg'
import tp              from '../assets/certificates/TP.jpg'
import viitHackthon    from '../assets/certificates/VIITHackthon.jpg'

// ─── Categories ──────────────────────────────────────────────────────────────
export const CERT_CATEGORIES = [
    'All',
    'AI & ML',
    'Python',
    'Database',
    'Hackathon',
    'Microsoft',
    'Others',
]

// ─── Certificate Data ─────────────────────────────────────────────────────────
const certificates = [
    {
        id: 1,
        title: 'Artificial Intelligence',
        issuer: 'Online Course',
        category: 'AI & ML',
        year: '2024',
        type: 'pdf',
        file: aiCert,
        description: 'Comprehensive certification in Artificial Intelligence fundamentals and applications.',
        tags: ['AI', 'Machine Learning', 'Deep Learning'],
    },
    {
        id: 2,
        title: 'Blue Stock Certification',
        issuer: 'Blue Stock — BFDA83598',
        category: 'Others',
        year: '2024',
        type: 'image',
        file: blueStockCert,
        description: 'Professional certification from Blue Stock program.',
        tags: ['Finance', 'Stock Market'],
    },
    {
        id: 3,
        title: 'Coding Ninjas',
        issuer: 'Coding Ninjas',
        category: 'Python',
        year: '2024',
        type: 'image',
        file: codingNinjas,
        description: 'Programming proficiency certification from Coding Ninjas.',
        tags: ['Programming', 'DSA', 'Problem Solving'],
    },
    {
        id: 4,
        title: 'Cybersecurity',
        issuer: 'Online Course',
        category: 'Others',
        year: '2024',
        type: 'image',
        file: cybersecurity,
        description: 'Cybersecurity fundamentals and best practices certification.',
        tags: ['Cybersecurity', 'Network Security', 'Ethical Hacking'],
    },
    {
        id: 5,
        title: 'DBMS',
        issuer: 'Online Course',
        category: 'Database',
        year: '2024',
        type: 'image',
        file: dbms,
        description: 'Database Management Systems certification covering SQL and database design.',
        tags: ['DBMS', 'SQL', 'Database Design'],
    },
    {
        id: 6,
        title: 'Flipkart Grid Participation',
        issuer: 'Flipkart',
        category: 'Hackathon',
        year: '2024',
        type: 'pdf',
        file: flipkart,
        description: 'Participation certificate from Flipkart Grid — national level tech competition.',
        tags: ['Hackathon', 'Competition', 'Flipkart'],
    },
    {
        id: 7,
        title: "Hacker's Hackathon",
        issuer: 'Hackathon Organization',
        category: 'Hackathon',
        year: '2024',
        type: 'image',
        file: hackersHack,
        description: 'Achievement certificate from Hackers Hackathon competition.',
        tags: ['Hackathon', 'Coding', 'Competition'],
    },
    {
        id: 8,
        title: 'Achievement Certificate',
        issuer: 'KATTA MADHURI',
        category: 'Others',
        year: '2024',
        type: 'pdf',
        file: kattaMadhuriPdf,
        description: 'Personal achievement and merit certificate.',
        tags: ['Achievement', 'Merit'],
    },
    {
        id: 9,
        title: 'JNTUVK Certificate',
        issuer: 'JNTU Vizianagaram',
        category: 'Others',
        year: '2024',
        type: 'pdf',
        file: jntuv,
        description: 'Official certification from Jawaharlal Nehru Technological University Vizianagaram.',
        tags: ['JNTU', 'University', 'Official'],
    },
    {
        id: 10,
        title: 'Microsoft Certification',
        issuer: 'Microsoft',
        category: 'Microsoft',
        year: '2024',
        type: 'image',
        file: microsoft,
        description: 'Official Microsoft technology certification.',
        tags: ['Microsoft', 'Cloud', 'Technology'],
    },
    {
        id: 11,
        title: 'NCAT Certification',
        issuer: 'NCAT',
        category: 'Others',
        year: '2024',
        type: 'image',
        file: ncat,
        description: 'National Certification Aptitude Test — recognized achievement.',
        tags: ['NCAT', 'Aptitude', 'National'],
    },
    {
        id: 12,
        title: 'Python Programming',
        issuer: 'Online Course',
        category: 'Python',
        year: '2024',
        type: 'pdf',
        file: python,
        description: 'Python programming language fundamentals and applications.',
        tags: ['Python', 'Programming', 'Development'],
    },
    {
        id: 13,
        title: 'Python Essentials 1',
        issuer: 'Cisco Networking Academy',
        category: 'Python',
        year: '2026',
        type: 'pdf',
        file: pythonEssentials,
        description: 'Python Essentials 1 — official Cisco Networking Academy certification.',
        tags: ['Python', 'Cisco', 'Programming', 'Essentials'],
    },
    {
        id: 14,
        title: 'Talentio Certification',
        issuer: 'Talentio',
        category: 'Others',
        year: '2024',
        type: 'image',
        file: talentio,
        description: 'Professional skills and talent certification from Talentio platform.',
        tags: ['Skills', 'Professional', 'Talent'],
    },
    {
        id: 15,
        title: 'TP Certification',
        issuer: 'Training Program',
        category: 'Others',
        year: '2024',
        type: 'image',
        file: tp,
        description: 'Training program completion and proficiency certification.',
        tags: ['Training', 'Professional Development'],
    },
    {
        id: 16,
        title: 'VIIT Hackathon',
        issuer: "Vignan's Institute of Engineering for Women",
        category: 'Hackathon',
        year: '2024',
        type: 'image',
        file: viitHackthon,
        description: 'Hackathon achievement certificate from VIIT — internal college level competition.',
        tags: ['Hackathon', 'VIIT', 'College', 'Competition'],
    },
]

export default certificates
