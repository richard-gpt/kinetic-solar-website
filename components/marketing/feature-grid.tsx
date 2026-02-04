import {
  Sun,
  DollarSign,
  Package,
  Globe,
  Shield,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  sun: Sun,
  dollar: DollarSign,
  package: Package,
  globe: Globe,
  shield: Shield,
  zap: Zap,
  users: Users,
  trending: TrendingUp,
};

function getIconForTitle(title: string): React.ComponentType<{ className?: string }> {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("price") || lowerTitle.includes("cost") || lowerTitle.includes("factory")) {
    return DollarSign;
  }
  if (lowerTitle.includes("global") || lowerTitle.includes("market") || lowerTitle.includes("world")) {
    return Globe;
  }
  if (lowerTitle.includes("order") || lowerTitle.includes("product") || lowerTitle.includes("kit")) {
    return Package;
  }
  if (lowerTitle.includes("warranty") || lowerTitle.includes("quality") || lowerTitle.includes("support")) {
    return Shield;
  }
  if (lowerTitle.includes("label") || lowerTitle.includes("brand") || lowerTitle.includes("custom")) {
    return Zap;
  }
  if (lowerTitle.includes("team") || lowerTitle.includes("partner") || lowerTitle.includes("serve")) {
    return Users;
  }
  if (lowerTitle.includes("grow") || lowerTitle.includes("scale") || lowerTitle.includes("advantage")) {
    return TrendingUp;
  }
  return Sun;
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className={`grid gap-6 ${gridCols[columns]}`}>
          {features.map((feature, index) => {
            const Icon = feature.icon
              ? iconMap[feature.icon] || Sun
              : getIconForTitle(feature.title);
            return (
              <Card key={index} className="border-0 shadow-sm bg-muted/30">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
