import React from 'react'
import FAQCard from './FAQCard'

type FAQSectionProps = {    
}

const FAQSection = ({}: FAQSectionProps) => {
    return (
        <section>
            <h1>
                Preguntas frecuentes
            </h1>

            <div className='grid grid-cols-12 gap-4 mb-8'>
                <FAQCard label='Seccion 1' href='/faq/seccion-1' />
                <FAQCard label='Seccion 2' href='/faq/seccion-2' />
                <FAQCard label='Seccion 3' href='/faq/seccion-3' />
                <FAQCard label='Seccion 4' href='/faq/seccion-4' />
                <FAQCard label='Seccion 5' href='/faq/seccion-5' />
                <FAQCard label='Seccion 6' href='/faq/seccion-6' />
                <FAQCard label='Seccion 7' href='/faq/seccion-7' />
                <FAQCard label='Seccion 8' href='/faq/seccion-8' />

            </div>
        </section>
    )
}

export default FAQSection