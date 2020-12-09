import Math from "./Math";

export default function Calculator() {
  return (
    <div>
      <p>
        20 + 4 = <Math x="20" operator="+" y="4"/>
      </p>
      <p>
        20 - 4 = <Math x="20" operator="-" y="4"/>
      </p>
      <p>
        5 * 4 = <Math x="5" operator="*" y="4"/>
      </p>
      <p>
        17 % 9 = <Math x="17" operator="%" y="9"/>
      </p>
    </div>
  );
}