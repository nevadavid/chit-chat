type Props = {
  items: { id: string; [K: string]: string }[];
  title?: string;
  labelKey: string;
};

export default function List({ items, title, labelKey }: Props) {
  return (
    <>
      <h3 className="p-4 text-gray-500">{title}</h3>
      <div className="divide-y divide-gray-200">
        {items.map((item) => (
          <div key={item.id} className="py-2 px-4 truncate text-sm">
            {item[labelKey]}
          </div>
        ))}
      </div>
    </>
  );
}
