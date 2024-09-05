import FAQSection from '@/components/faq/FAQSection';
import faqsApi from '@/services/faqs/faqs.service';
import React from 'react';

const renderText = (children: any) => {
    return children.map((child: any, index: number) => {
        if (child.type === 'text') {
            return <span key={index}>{child.text}</span>;
        }
        return null;
    });
};

const renderBodyContent = (content: any) => {
    return content.map((item: any, index: number) => {
        switch (item.type) {
            case 'paragraph':
                return (
                    <p key={index}>
                        {renderText(item.children)}
                    </p>
                );
            case 'list':
                return (
                    <ul key={index}>
                        {item.children.map((listItem: any, i: number) => (
                            <li key={i}>
                                {renderText(listItem.children)}
                            </li>
                        ))}
                    </ul>
                );
            // Agrega más casos para otros tipos de contenido si es necesario
            default:
                return null;
        }
    });
};

const FaqPage = async ({ params }: { params: { slug: string; }; }) => {
    const faqPages = await faqsApi.getFAQPages();
    const faqPage = faqPages.data.find(page => page.attributes.slug === `/${params.slug}`);

    return (
        <>
            <main>
                <FAQSection sections={faqPages.data} />
                <section className="flex flex-col">
                    
                        <h2>
                            {faqPage?.attributes.title}
                        </h2>
                        <div>
                            {faqPage?.attributes.body && renderBodyContent(faqPage.attributes.body)}
                        </div>
                    
                </section>
            </main>
        </>
    );
};

export default FaqPage;
