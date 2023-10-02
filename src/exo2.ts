interface Subject {
  id: number;
  name?: string;
  created_at?: string | Date;
}

interface Obj {
  [key: string]: Subject;
}

export function sortByDate(obj: Obj, desc = false): Subject[] {
  const result: Subject[] = [];

  for (let key in obj) {
    const subject = obj[key];
    if (subject.created_at) {
      result.push(subject);
    }
  }

  result.sort((a, b) => {
    const dateA = new Date(a.created_at as string);
    const dateB = new Date(b.created_at as string);
    return desc ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
  });

  return result;
}


const obj: Obj = {};

for (let index = 0; index < 20; index++) {
  let subject: Subject = {
    id: index,
    name: `Subject ${index}`,
    created_at: new Date().toISOString(),
  };  
  obj[`subject-${index}`] = subject;
}

console.log(sortByDate(obj));
