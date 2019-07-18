/* eslint-disable react/no-string-refs */
import React from 'react';
import { Editor, EditorState, RichUtils, convertFromRaw, convertToRaw } from 'draft-js';

import './RichEditor.scss';

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';
    default:
      return null;
  }
}

class RichEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: this.props.content
        ? EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.content)))
        : EditorState.createEmpty()
    };

    this.focus = () => this.refs.editor.focus();
    this.blur = () => {
      if (this.state.editorState.getLastChangeType()) {
        const rawContent = convertToRaw(this.state.editorState.getCurrentContent());
        this.props.updateParent(JSON.stringify(rawContent));
      }
    };
    this.onChange = (editorState) => this.setState({ editorState });

    this.handleKeyCommand = (command) => this.handleKeyCommand(command);
    this.onTab = (e) => this.onTab(e);
    this.toggleBlockType = (type) => this.toggleBlockType(type);
    this.toggleInlineStyle = (style) => this.toggleInlineStyle(style);
  }

  handleKeyCommand = (command) => {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  };

  onTab = (e) => {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  };

  toggleBlockType = (blockType) => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  };

  toggleInlineStyle = (inlineStyle) => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
  };

  render() {
    const { editorState } = this.state;

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (
        contentState
          .getBlockMap()
          .first()
          .getType() !== 'unstyled'
      ) {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <div className="RichEditor-root">
        <BlockStyleControls editorState={editorState} onToggle={this.toggleBlockType} />
        <div className={className} onClick={this.focus}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onTab={this.onTab}
            placeholder={this.props.placeholder}
            onBlur={this.blur}
            ref="editor"
            spellCheck={true}
          />
        </div>
      </div>
    );
  }
}

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: <i className="fas fa-bold" />, style: 'BOLD' },
  { label: <i className="fas fa-italic" />, style: 'ITALIC' },
  { label: <i className="fas fa-underline" />, style: 'UNDERLINE' },
  { label: <i className="fas fa-quote-right" />, style: 'blockquote' },
  { label: <i className="fas fa-list-ul" />, style: 'unordered-list-item' },
  { label: <i className="fas fa-list-ol" />, style: 'ordered-list-item' },
  { label: <i className="fas fa-code" />, style: 'code-block' }
];

const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type, i) => (
        <StyleButton
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

RichEditor.defaultProps = {
  placeholder: 'Enter task description...'
};

export default RichEditor;
