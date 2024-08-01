import { Button, Flex, Table } from "antd";
import { useState } from "react";


const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title:'Phone',
      dataIndex:'phone'
    },
 
  ];

const data = Array.from({
    length:46,
}).map((_,i)=>({
    key:i,
    name:`Sam ${i}`,
    age:`1${i}`,
    phone:`0123${i}`,
}));
const PracTable = () => {
    const [name, setName] = useState('Edward');
    const [count,setCount] = useState(12);

    function handleClick() {
       
      setName('Taylor');
      setCount(a => a + 1);
      console.log(name,count);
    }

  const [selectedRowKeys,setSelectedRowKeys] = useState([]);
  const [loading,setLoading]=useState(false);
  const start =()=>{
    setLoading(true);
    setTimeout(()=>{

    },1000);
  };
  const onSelectChange=(newSelectedRowKeys)=>{
    console.log('selectedRowKeys changed:',newSelectedRowKeys );
    setSelectedRowKeys(newSelectedRowKeys)
  };
  const rowSelection ={
    selectedRowKeys,
    onchange:onSelectChange,
  };
  const hasSelected = selectedRowKeys.length>0;
  return(
    <Flex gap="middle" vertical>
      <Flex align="center" gap="middle">
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
      </Flex>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      <div>
      <h1>Counter: {count}</h1>
      <Button onClick={handleClick}>Increment</Button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </Flex>
    
  );
}

export default PracTable