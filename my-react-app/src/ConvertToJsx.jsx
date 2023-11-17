function ConvertToJsx() {
  return (
    <>
      <h1>Test title</h1>
      <ol className="test-list">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ol>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="cyan" strokeWidth="2" />
        {/* attribute follows camelCase convention */}
      </svg>
      <form>
        <input type="text" />
        {/* void tag need to be closed with slash */}
      </form>
    </>
  );
}

export default ConvertToJsx;
