const hugeicons = require('hugeicons-react');

const lucideIcons = [
  "Check", "Loader2", "ArrowUp", "Code2", "GraduationCap", "Lightbulb", "Rocket", "ArrowRight",
  "ArrowLeft", "Mail", "MapPin", "Twitter", "Instagram", "Linkedin", "ExternalLink", "CreditCard",
  "Clock", "CheckCircle", "XCircle", "AlertTriangle", "Info", "Camera", "Save", "User", "MessageSquare",
  "Plus", "CheckCircle2", "PanelLeft", "House", "ChevronRight", "Shield", "Bell", "Smartphone", "Sliders",
  "Eye", "EyeOff", "Trash2", "RefreshCw", "Key", "Copy", "Terminal", "Zap", "Crown", "Star",
  "Code", "ChevronDown", "ChevronsLeftRight", "BadgePlus", "SquareTerminal", "LayoutDashboard",
  "Settings", "X", "LogOut", "Facebook", "Github", "Menu", "Home", "BookOpen", "Globe", "Server",
  "PlayCircle", "Box", "Fingerprint", "FileCode2"
];

const mapped = {};
const unmapped = [];

lucideIcons.forEach(icon => {
  const hugeName = icon + 'Icon';
  if (hugeicons[hugeName]) {
    mapped[icon] = hugeName;
  } else {
    // Try some common variants
    const variants = [
      icon + '01Icon',
      icon + '02Icon',
      icon.replace('2', '') + 'Icon',
      icon.replace('2', '01') + 'Icon',
      icon.replace('2', '02') + 'Icon',
      icon.replace('Circle', 'CircleIcon'),
      'Tick01Icon', 'Cancel01Icon', 'Home01Icon', 'CodeIcon'
    ];
    let found = false;
    for (const v of variants) {
      if (hugeicons[v]) {
        mapped[icon] = v;
        found = true;
        break;
      }
    }
    if (!found) unmapped.push(icon);
  }
});

console.log("Mapped:", Object.keys(mapped).length);
console.log("Unmapped:", unmapped);

fs = require('fs');
fs.writeFileSync('icon-map.json', JSON.stringify({mapped, unmapped}, null, 2));
