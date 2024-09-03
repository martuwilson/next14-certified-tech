import FAQCard from '@/components/faq/FAQCard'
import React from 'react'

const FaqPage = () => {
    return (
        <>
            <main>
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
                <section className='flex flex-col'>
                    <h2>Seccion 1</h2>
                </section>
            </main>

        </>
    )
}

export default FaqPage