import Math from './Math';

export default function Calculator() {
  return (
    <>
    <p>20 + 4 = <Math a='20' b='4' op='+' /></p>
    <p>20 - 4 = <Math a='20' b='4' op='-' /></p>
    <p>20 * 4 = <Math a='20' b='4' op='*' /></p>
    <p>20 % 11 = <Math a='20' b='11' op='%' /></p>
    </>
  )
}