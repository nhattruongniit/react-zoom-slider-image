import SliderImage from './components/SliderImage';

const data = [
  {
    image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-1-org.jpg',
    text: 'img1'
  },
  {
    image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-4-org.jpg',
    text: 'img2'
  },
  {
    image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-10-org.jpg',
    text: 'img3'
  },
];

function App() {
  return (
    <div className="App">
      <SliderImage 
        data={data} 
        width="500px" 
        showDescription={true} 
        direction="right" 
      />
    </div>
  );
}

export default App;
