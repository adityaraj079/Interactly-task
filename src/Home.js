import React, { useCallback, useState  } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';
import { FiX } from 'react-icons/fi';

import 'reactflow/dist/style.css';

const initialNodes = [
    {
        id: '1',
        data: { label: 'Recruit' },
        position: { x: 500, y: 100 },
        type: 'input',
    },
    {
        id: '2',
        data: { label: 'Aditya' },
        position: { x: 300, y: 300 },
    },
    {
        id: '3',
        data: { label: 'Raj' },
        position: { x: 700, y: 300 },
    },
  ];

const initialEdges = [
    { id: '1-3', source: '1', target: '3' },
  { id: '1-2', source: '1', target: '2' }
];

function Home() {  

    const [showNode, setShowNode] = useState(false);
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [],
    );

    const handleDivClick = () => {
        setShowNode((prevShowNode) => !prevShowNode);
    };
    const handleNodeMouseEnter = (event, node) => {
        
        // You can perform any actions you want when the mouse enters a node here
        <div>
            <input
            type="color"
            defaultValue={data.color}
            onChange={(evt) => updateNodeColor(id, evt.target.value)}
            className="nodrag"
            />
        </div>
      };
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
        <button onClick={handleDivClick}>Create Node</button>
        { showNode &&
        (
            <ReactFlow nodes={nodes} onNodesChange={onNodesChange} edges={edges} onEdgesChange={onEdgesChange}
            fitView
            onNodeMouseEnter={handleNodeMouseEnter}>
                <Background />
                <Controls />
            </ReactFlow>
        )
        }
        </div>
    );
}

export default Home;

