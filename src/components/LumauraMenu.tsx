import Image from 'next/image';

const menuItems = [
  { src: '/assets/lumaura-ui/access.png', label: 'Access Portal' },
  { src: '/assets/lumaura-ui/command.png', label: 'Command Center' },
  { src: '/assets/lumaura-ui/opportunity.png', label: 'Opportunity Vitality' },
  { src: '/assets/lumaura-ui/vault.png', label: 'Document Vault' },
  { src: '/assets/lumaura-ui/drag.png', label: 'Interface' },
  { src: '/assets/lumaura-ui/engn.png', label: 'ENGN Coin' },
  { src: '/assets/lumaura-ui/rolde.png', label: 'Rolde Surin' },
  { src: '/assets/lumaura-ui/nvizn.png', label: 'NVIZN Portal' },
];

export default function LumauraMenu() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-8 text-center">
      {menuItems.map((item, index) => (
        <div key={index} className="hover:scale-105 transition-transform">
          <Image src={item.src} alt={item.label} width={100} height={100} />
          <p className="mt-2 text-white text-sm">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

