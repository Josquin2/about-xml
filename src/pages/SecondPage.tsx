import React from "react";
import { CodeEditor, Language } from "@patternfly/react-code-editor";

const CodeEditorSizeToFit: React.FunctionComponent = () => {
  const onEditorDidMount = (editor: any, monaco: any) => {
    editor.layout();
    editor.focus();
    monaco.editor.getModels()[0].updateOptions({ tabSize: 5 });
  };

  const code = `<?xml version="1.0" encoding="UTF-8"?>
  <bookstore>
    <book>
      <title>XML для начинающих</title>
      <author>Иван Иванов</author>
      <year>2024</year>
      <price>29.99</price>
    </book>
  </bookstore>`;

  return (
    <CodeEditor
      isLanguageLabelVisible={true}
      isReadOnly={true}
      code={code}
      language={Language.xml}
      onEditorDidMount={onEditorDidMount}
      height="sizeToFit"
    />
  );
};

export const SecondPage = (
  <div>
    <h1>Структура XML-документа</h1>
    <section>
      <br />

      <p>
        XML-документ состоит из элементов, которые могут содержать текст,
        атрибуты и другие элементы. Основные компоненты XML-документа включают
        декларацию XML, корневой элемент и дочерние элементы.
      </p>
      <br />
      <p>
        Каждый XML-документ должен иметь один корневой элемент, который содержит
        все остальные элементы. Корневой элемент является родительским для всех
        других элементов в документе.
      </p>
      <br />
      <p>
        Дочерние элементы находятся внутри корневого элемента и могут содержать
        текст, атрибуты и другие элементы. Они образуют иерархическую структуру,
        которая называется деревом XML.
      </p>
      <br />
      <p>
        Элементы могут содержать текстовое содержимое, которое находится между
        открывающим и закрывающим тегами элемента.
      </p>

      <br />
      <b>Пример кода:</b>
      <br />
      <CodeEditorSizeToFit></CodeEditorSizeToFit>
    </section>
  </div>
);
