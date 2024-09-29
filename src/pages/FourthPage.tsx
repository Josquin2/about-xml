import React from "react";
import { CodeEditor, Language } from "@patternfly/react-code-editor";

const CodeEditorSizeToFit: React.FunctionComponent = () => {
  const onEditorDidMount = (editor: any, monaco: any) => {
    editor.layout();
    editor.focus();
    monaco.editor.getModels()[0].updateOptions({ tabSize: 5 });
  };

  const code = `<!-- DTD -->
  <!DOCTYPE note [
    <!ELEMENT note (to, from, heading, body)>
    <!ELEMENT to (#PCDATA)>
    <!ELEMENT from (#PCDATA)>
    <!ELEMENT heading (#PCDATA)>
    <!ELEMENT body (#PCDATA)>
  ]>
  <note>
    <to>Татьяна</to>
    <from>Алексей</from>
    <heading>Напоминание</heading>
    <body>Не забудь про встречу в 3 часа дня.</body>
  </note>
  
  <!-- XML Schema -->
  <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="note">
      <xs:complexType>
        <xs:sequence>
          <xs:element name="to" type="xs:string"/>
          <xs:element name="from" type="xs:string"/>
          <xs:element name="heading" type="xs:string"/>
          <xs:element name="body" type="xs:string"/>
        </xs:sequence>
      </xs:complexType>
    </xs:element>
  </xs:schema>
  
  <note>
    <to>Татьяна</to>
    <from>Алексей</from>
    <heading>Напоминание</heading>
    <body>Не забудь про встречу в 3 часа дня.</body>
  </note>
  `;

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

const text =
  "DTD (Document Type Definition) определяет структуру XML-документа с помощью деклараций элементов и атрибутов. Например, DTD может указать, что элемент <note> должен содержать элементы <to>, <from>, <heading> и <body>, каждый из которых должен содержать текстовые данные (PCDATA). XML Schema, с другой стороны, предоставляет более детализированные определения, включая типы данных и ограничения. Например, XML Schema может указать, что элемент <note> должен содержать последовательность элементов <to>, <from>, <heading> и <body>, каждый из которых должен быть строкой.";

export const FourthPage = (
  <div>
    <h1>Валидация XML-документов</h1>
    <section>
      <br />

      <div>
        <p>
          Валидация XML-документов — это процесс проверки документа на
          соответствие определенной структуре и правилам. XML-документ считается
          валидным, если его содержимое соответствует элементам, атрибутам и
          связанным с ним определениям типа документа (DTD) или XML Schema.
          Валидация помогает убедиться, что данные структурированы правильно и
          соответствуют заданным ограничениям.
        </p>
        <br />
        <p>
          Существует два основных способа валидации XML-документов: с помощью
          DTD (Document Type Definition) и XML Schema. DTD предоставляет набор
          правил для структуры XML-документа, включая определения элементов и
          атрибутов. XML Schema является более мощным и гибким инструментом,
          который позволяет задавать типы данных, ограничения и отношения между
          элементами.
        </p>
        <br />
        <p>{text}</p>
      </div>

      <br />
      <b>Пример кода:</b>
      <br />
      <CodeEditorSizeToFit></CodeEditorSizeToFit>
    </section>
  </div>
);
