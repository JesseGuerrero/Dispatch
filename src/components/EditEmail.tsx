import React, { useRef, useState, useEffect } from 'react';
import EmailEditor from 'react-email-editor';
import designJson from "./test.json"; // JSON import
import htmlContent from "./test"; // HTML import

const EditEmail = () => {
    const emailEditorRef = useRef<any>(null);
    const [templateName, setTemplateName] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [design, setDesign] = useState({ design: designJson, html: htmlContent });
    const [isDefaultDesignLoaded, setIsDefaultDesignLoaded] = useState(false);

    useEffect(() => {
        if (!isDefaultDesignLoaded && emailEditorRef.current?.editor) {
            emailEditorRef.current.editor.loadDesign(designJson);
            setIsDefaultDesignLoaded(true);
        }
    }, [designJson, isDefaultDesignLoaded]);

    useEffect(() => {
        if (emailEditorRef.current?.editor && design.design) {
            emailEditorRef.current.editor.loadDesign(design);
        }
    }, [design]);


    const exportHtml = () => {
        emailEditorRef.current.editor.exportHtml((data: { html: string }) => {
            const { html } = data;
            const blob = new Blob([html], { type: 'text/html' });
            const href = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = href;
            link.download = `${templateName || 'default'}.html`; // File name for download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(href); // Clean up the URL object
            //send to spring
        });
    };

    const handleTemplateNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
        setTemplateName(e.target.value);
        emailEditorRef.current.editor.loadDesign(design);
    };

    return (
        <div>
            <EmailEditor
                ref={emailEditorRef}
            />
            <div>
                <label htmlFor="templateName">Template Name: </label>
                <select
                    id="templateName"
                    value={selectedOption}
                    onChange={handleTemplateNameChange}
                >
                    <option value="">Select a template</option>
                    <option value="template1">Template 1</option>
                    <option value="template2">Template 2</option>
                    <option value="template3">Template 3</option>
                </select>
            </div>
            <button onClick={exportHtml}>Save Template</button>
        </div>
    );
}

export default EditEmail;
