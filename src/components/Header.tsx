const dynamicContent = ['actual', 'future', 'past']

function getRandContent() {
  return dynamicContent[Math.floor(Math.random() * dynamicContent.length)];
}
export function Header() {
  return (
    <header>
      <h1>
        {getRandContent()} content
      </h1>
    </header>
  );
}
