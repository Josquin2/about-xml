import React from "react";
import { CodeEditor, Language } from "@patternfly/react-code-editor";

const CodeEditorSizeToFit: React.FunctionComponent = () => {
  const onEditorDidMount = (editor: any, monaco: any) => {
    editor.layout();
    editor.focus();
    monaco.editor.getModels()[0].updateOptions({ tabSize: 5 });
  };

  const code = `<xdxf lang_from="en" lang_to="ru" format="logical" revision="1">
  <meta_info>
    <title>Англо-русский словарь</title>
    <publisher>Open Source Community</publisher>
    <author>John Doe</author>
    <year>2024</year>
  </meta_info>
  <lexicon>
    <ar>
      <k>apple</k>
      <tr>яблоко</tr>
      <def>Съедобный плод яблони.</def>
      <syn>fruit</syn>
      <ant>vegetable</ant>
    </ar>
    <ar>
      <k>book</k>
      <tr>книга</tr>
      <def>Печатное или рукописное произведение.</def>
      <syn>volume</syn>
      <ant>magazine</ant>
    </ar>
  </lexicon>
</xdxf>
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

export const FifthPage = (
  <div>
    <h1>XML-словари и их применение</h1>
    <section>
      <br />

      <p>
        XML-словари (или словарные форматы) используются для структурирования и
        обмена лексическими данными. Они позволяют хранить и передавать
        словарные статьи, включая определения, переводы, синонимы, антонимы и
        другие лексические данные. Один из наиболее известных форматов
        XML-словарей — это XDXF (XML Dictionary eXchange Format).
      </p>
      <br />
      <p>
        XDXF (XML Dictionary eXchange Format) — это открытый проект,
        направленный на объединение всех существующих словарных форматов на
        основе универсального XML-формата. XDXF поддерживает
        структурно-семантическую разметку словарных статей, что позволяет
        создавать как обычные пользовательские словари, так и тезаурусы и
        онтологии. Формат XDXF обладает высокой гибкостью и может быть
        использован для различных целей, включая создание электронных словарей,
        переводческих систем и лингвистических исследований.
      </p>
      <br />
      <p>
        Основные преимущества XDXF включают богатую схему мета-информации о
        файле (издатель, автор, редактор, год издания и т. д.), возможность
        ссылаться не только на полные словарные статьи, но и на их части, а
        также гибкую настройку полнотекстовой индексации словаря. XDXF позволяет
        выделять в словарной статье основные варианты переводов для
        предпросмотра, а также поддерживает семантически связанные слова
        (синонимы, гиперонимы, антонимы и т. д.).
      </p>
      <br />
      <b>Пример кода:</b>
      <br />
      <CodeEditorSizeToFit></CodeEditorSizeToFit>
    </section>
  </div>
);
