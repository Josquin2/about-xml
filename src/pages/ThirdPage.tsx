import React from "react";
import { CodeEditor, Language } from "@patternfly/react-code-editor";

const CodeEditorSizeToFit: React.FunctionComponent = () => {
  const onEditorDidMount = (editor: any, monaco: any) => {
    editor.layout();
    editor.focus();
    monaco.editor.getModels()[0].updateOptions({ tabSize: 5 });
  };

  const code = `<root xmlns:h="http://www.w3.org/TR/html4/" xmlns:f="http://www.example.com/furniture">
  <h:table>
    <h:tr>
      <h:td>Яблоки</h:td>
      <h:td>Бананы</h:td>
    </h:tr>
  </h:table>
  <f:table>
    <f:name>Африканский кофейный столик</f:name>
    <f:width>80</f:width>
    <f:length>120</f:length>
  </f:table>
</root>`;

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
  "В этом примере префиксы h и f связываются с различными пространствами имен, что позволяет избежать конфликта имен. Элементы <h:table> и <f:table> принадлежат разным пространствам имен, что делает их уникальными и предотвращает возможные конфликты. Атрибуты, такие как category в элементе <book>, предоставляют дополнительную информацию о элементах и помогают лучше структурировать данные.";

export const ThirdPage = (
  <div>
    <h1>Использование атрибутов и пространств имен</h1>
    <section>
      <br />
      <div>
        <p>
          Атрибуты и пространства имен играют важную роль в XML, помогая
          организовать и структурировать данные. Атрибуты предоставляют
          дополнительную информацию о элементах и всегда записываются внутри
          открывающего тега элемента. Они состоят из имени и значения,
          разделенных знаком равенства. Пространства имен используются для
          предотвращения конфликтов имен между элементами и атрибутами из разных
          источников. Они позволяют уникально идентифицировать элементы и
          атрибуты, связывая их с именем пространства или URI (Uniform Resource
          Identifier).
        </p>
        <br />
        <p>
          Пространства имен могут быть объявлены в корневом элементе или в любом
          другом элементе XML-документа. Декларация пространства имен имеет
          следующий синтаксис: xmlns:prefix="URI". Конфликты имен можно легко
          избежать, используя префиксы имен. Префиксы связываются с
          пространствами имен с помощью атрибута xmlns.
        </p>
      </div>
      <br />
      <b>Пример кода:</b>
      <br />
      <CodeEditorSizeToFit></CodeEditorSizeToFit>
      <br />
      <p>{text}</p>
    </section>
  </div>
);
