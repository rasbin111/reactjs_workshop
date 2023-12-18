type Person = {
  full_name: string;
};

export function getPerson(): Promise<Person> {
  return new Promise((resolve) => setTimeout(() => resolve({ full_name: 'Bob' }), 1000));
}
