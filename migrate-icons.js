import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = './src';
const fileExts = ['.jsx', '.js'];

// Explicit mappings for icons that don't follow the "IconName" -> "IconNameIcon" pattern perfectly
// Hugeicons usually use suffixes like 01, 02 or different names
const iconMap = {
    'Check': 'Tick01Icon',
    'Loader2': 'Loading02Icon',
    'ArrowUp': 'ArrowUp01Icon',
    'Code2': 'CodeIcon',
    'GraduationCap': 'EducationIcon',
    'Lightbulb': 'BulbIcon',
    'Rocket': 'Rocket01Icon',
    'ArrowRight': 'ArrowRight01Icon',
    'ArrowLeft': 'ArrowLeft01Icon',
    'Mail': 'Mail01Icon',
    'MapPin': 'Location01Icon',
    'Twitter': 'TwitterIcon',
    'Instagram': 'InstagramIcon',
    'Linkedin': 'Linkedin01Icon',
    'ExternalLink': 'LinkSquare01Icon',
    'CreditCard': 'CreditCardIcon',
    'Clock': 'Clock01Icon',
    'CheckCircle': 'CheckmarkBadge01Icon',
    'XCircle': 'CancelCircleIcon',
    'AlertTriangle': 'Alert01Icon',
    'Info': 'InformationCircleIcon',
    'Camera': 'Camera01Icon',
    'Save': 'FloppyDiskIcon',
    'User': 'UserIcon',
    'MessageSquare': 'Message01Icon',
    'Plus': 'PlusSignIcon',
    'CheckCircle2': 'CheckmarkBadge02Icon',
    'PanelLeft': 'LayoutLeftIcon',
    'House': 'Home01Icon',
    'ChevronRight': 'ArrowRight01Icon',
    'Shield': 'Shield01Icon',
    'Bell': 'Notification01Icon',
    'Smartphone': 'SmartPhone01Icon',
    'Sliders': 'Slider01Icon',
    'Eye': 'ViewIcon',
    'EyeOff': 'ViewOffIcon',
    'Trash2': 'Delete02Icon',
    'RefreshCw': 'RefreshIcon',
    'Key': 'Key01Icon',
    'Copy': 'Copy01Icon',
    'Terminal': 'TerminalIcon',
    'Zap': 'LightningIcon',
    'Crown': 'CrownIcon',
    'Star': 'StarIcon',
    'Code': 'CodeIcon',
    'ChevronDown': 'ArrowDown01Icon',
    'ChevronsLeftRight': 'ArrowLeftRightIcon',
    'BadgePlus': 'BadgeIcon',
    'SquareTerminal': 'TerminalIcon',
    'LayoutDashboard': 'DashboardSquare01Icon',
    'Settings': 'Settings01Icon',
    'X': 'Cancel01Icon',
    'LogOut': 'Logout01Icon',
    'Facebook': 'Facebook01Icon',
    'Github': 'GithubIcon',
    'Menu': 'Menu01Icon',
    'Home': 'Home01Icon',
    'BookOpen': 'BookOpen01Icon',
    'Globe': 'GlobeIcon',
    'Server': 'ServerIcon',
    'PlayCircle': 'PlayCircleIcon',
    'Box': 'Box01Icon',
    'Fingerprint': 'FingerprintIcon',
    'FileCode2': 'FileCodeIcon'
};

const getHugeiconName = (lucideName) => {
    return iconMap[lucideName] || (lucideName + 'Icon');
};

function processDirectory(directory) {
    fs.readdirSync(directory).forEach(file => {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fileExts.includes(path.extname(fullPath))) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            if (content.includes('lucide-react')) {
                const importRegex = /import\s+{([^}]+)}\s+from\s+['"]lucide-react['"];?/g;
                let match;
                
                while ((match = importRegex.exec(content)) !== null) {
                    const icons = match[1].split(',').map(i => i.trim()).filter(i => i);
                    
                    let newContent = content;
                    
                    const newImport = `import { ${icons.map(getHugeiconName).join(', ')} } from 'hugeicons-react';`;
                    newContent = newContent.replace(match[0], newImport);
                    
                    icons.forEach(icon => {
                        const tagRegex1 = new RegExp(`<${icon}(\\s|>)`, 'g');
                        newContent = newContent.replace(tagRegex1, `<${getHugeiconName(icon)}$1`);
                        
                        const tagRegex2 = new RegExp(`</${icon}>`, 'g');
                        newContent = newContent.replace(tagRegex2, `</${getHugeiconName(icon)}>`);
                    });
                    
                    content = newContent;
                }
                
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    });
}

processDirectory(dir);
