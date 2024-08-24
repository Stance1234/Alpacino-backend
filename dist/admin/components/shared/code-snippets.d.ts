declare const CodeSnippets: ({ snippets, }: {
    snippets: {
        label: string;
        language: string;
        code: string;
    }[];
}) => import("react/jsx-runtime").JSX.Element;
export default CodeSnippets;
