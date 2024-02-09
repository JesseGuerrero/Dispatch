import React, {useRef, useState} from 'react';
import EmailEditor from 'react-email-editor';

const CreateEmail = () => {
    const emailEditorRef = useRef<any>(null);
    const [templateName, setTemplateName] = useState("");

    const exportHtml = () => {
        emailEditorRef.current.editor.exportHtml((data: { design: any; html: string; }) => {
            const { html, design } = data;

            // Convert design object to JSON string
            const designString = JSON.stringify(design, null, 2);

            // Create Blobs from HTML and design JSON
            const htmlBlob = new Blob([html], { type: 'text/html' });
            const designBlob = new Blob([designString], { type: 'application/json' });

            // Create URLs for the Blobs
            const htmlHref = URL.createObjectURL(htmlBlob);
            const designHref = URL.createObjectURL(designBlob);

            // Create <a> elements for downloading HTML and design JSON
            const htmlLink = document.createElement('a');
            htmlLink.href = htmlHref;
            htmlLink.download = "test.html"; // File name for download
            document.body.appendChild(htmlLink);
            htmlLink.click();
            document.body.removeChild(htmlLink);
            URL.revokeObjectURL(htmlHref); // Clean up the URL object

            const designLink = document.createElement('a');
            designLink.href = designHref;
            designLink.download = "test.json"; // File name for download
            document.body.appendChild(designLink);
            designLink.click();
            document.body.removeChild(designLink);
            URL.revokeObjectURL(designHref); // Clean up the URL object

            //send to spring
        });
    };

    const handleTemplateNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTemplateName(e.target.value);
    };

    return (
        <div>
            <EmailEditor
                ref={emailEditorRef}
            />
            <div>
                <label htmlFor="templateName">Template Name: </label>
                <input
                    type="text"
                    id="templateName"
                    value={templateName}
                    onChange={handleTemplateNameChange}
                />
            </div>
            <button onClick={exportHtml}>Save Template</button>
        </div>
    );
}

export default CreateEmail;
